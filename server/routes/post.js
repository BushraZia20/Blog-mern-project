const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const Posts = require("../models/Posts");

const router = express.Router();

// Check if uploads folder exists, if not, create it
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    console.log("request body: ", req.body); //logging the request body
    console.log("uploaded file: ", req.file); //logging the file details

    // check if required fields are missing
    if (!title || !content || !userId) {
      return res.status(400).json({ message: "missing required fields" });
    }

    const newPost = new Posts({
      title,
      content,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
      user: userId,
    });

    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error });
  }
});

module.exports = router;

// //ORIGINAL CODE
// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const Posts = require("../models/Posts");

// const router = express.Router();

// // Check if uploads folder exists, if not, create it
// const uploadsDir = path.join(__dirname, "../uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadsDir); // Save files to /uploads directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Give file a unique name
//   },
// });

// const upload = multer({ storage });

// // Route to create a new post
// router.post("/create", upload.single("image"), async (req, res) => {
//   try {
//     const { title, content, userId } = req.body;
//     console.log("Request Body:", req.body); // Log the request body
//     console.log("Uploaded File:", req.file); // Log the file details

//     // Check if required fields are provided
//     if (!title) {
//       return res.status(400).json({ message: "Missing the title field" });
//     }
//     if (!content) {
//       return res.status(400).json({ message: "Missing the content field" });
//     }
//     if (!userId) {
//       return res.status(400).json({ message: "Missing the userId field" });
//     }

//     const newPost = new Posts({
//       title,
//       content,
//       imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
//       user: userId,
//     });

//     await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post created successfully", post: newPost });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create post", error });
//   }
// });

// module.exports = router;
