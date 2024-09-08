const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("../server/routes/auth");
const postRoutes = require("../server/routes/post");
const path = require("path");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json()); //for bodyparser

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("failed to connect"));

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serves the static file on the server - learn-mern/server/uploads
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
