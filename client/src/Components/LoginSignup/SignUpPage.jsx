import React, { useState } from "react";
import "./SignUpPage.css";
import Logo from "../Assets/BlogLogo.png";
import { Typography, TextField, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const url = "http://localhost:5001/api/auth/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = response.json();
        navigate("/login");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo_div">
          <div className="logo_img_div">
            <img src={Logo} alt=".." />
          </div>
          <Typography variant="p" color="#9DD5CA">
            <p style={{ fontWeight: "bold" }}>Bloggers.com</p>
          </Typography>
        </div>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
          variant="h4"
          color="white"
        >
          Sign Up
        </Typography>
        <div className="input_field">
          <div className="inputs_div">
            <TextField
              className="form_input"
              type="text"
              variant="outlined"
              label="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                // Customizing the label text color
                "& label": {
                  color: "#3D485E", // Label color when focused
                },
                "& label.Mui-focused": {
                  color: "#94A0B8", // Default label color
                },
                "& .MuiOutlinedInput-root": {
                  // Customize the input field height and remove padding
                  height: "50px", // Set the height of the input field
                  "& input": {
                    padding: "10px", // Remove padding to fit within 10px height
                    fontSize: "19px", // Optionally adjust the font size for better fit
                    color: "white",
                  },
                  "& fieldset": {
                    border: "2px solid #94a0b8",
                    borderColor: "#94a0b8", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D485E", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#94a0b8", // Border color when focused
                  },
                },
              }}
            />

            <TextField
              className="form_input"
              type="text"
              variant="outlined"
              label="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                // Customizing the label text color
                "& label": {
                  color: "#3D485E", // Label color when focused
                },
                "& label.Mui-focused": {
                  color: "#94A0B8", // Default label color
                },
                "& .MuiOutlinedInput-root": {
                  // Customize the input field height and remove padding
                  height: "50px", // Set the height of the input field
                  "& input": {
                    padding: "10px", // Remove padding to fit within 10px height
                    fontSize: "19px", // Optionally adjust the font size for better fit
                    color: "white",
                  },
                  "& fieldset": {
                    border: "2px solid #94a0b8",
                    borderColor: "#94a0b8", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D485E", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#94a0b8", // Border color when focused
                  },
                },
              }}
            />
            <TextField
              className="form_input"
              type="password"
              variant="outlined"
              label="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                // Customizing the label text color
                "& label": {
                  color: "#3D485E", // Label color when focused
                },
                "& label.Mui-focused": {
                  color: "#94A0B8", // Default label color
                },
                "& .MuiOutlinedInput-root": {
                  // Customize the input field height and remove padding
                  height: "50px", // Set the height of the input field
                  "& input": {
                    padding: "10px", // Remove padding to fit within 10px height
                    fontSize: "19px", // Optionally adjust the font size for better fit
                    color: "white",
                  },
                  "& fieldset": {
                    border: "2px solid #94a0b8",
                    borderColor: "#94a0b8", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#3D485E", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#94a0b8", // Border color when focused
                  },
                },
              }}
            />
          </div>
          <div className="checked_div">
            <Checkbox
              sx={{ paddingRight: "9px" }}
              className="custom-checkbox"
            />
            <label className="custom-checkbox-label">
              I want to receive updates via email.
            </label>
          </div>
        </div>
        <Button
          className="sign_up_btn"
          sx={{ backgroundColor: "white", color: "black" }}
          variant="contained"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography variant="p" color="white">
          Already have an account?{" "}
          <Link style={{ color: "white" }} to="/login">
            Sign in
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignUpPage;
