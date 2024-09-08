import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../Assets/BlogLogo.png";

const Container = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    ellipse 100% 70% at center,
    #03111f 0%,
    #041527 20%,
    #051324 40%,
    #06121f 60%,
    #070f18 80%,
    #080d15 100%
  );
  color: white;
`;
const Wrapper = styled(Box)`
  width: 30%;
  height: 90%;
  border: 3px solid #242a37;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: radial-gradient(
    ellipse 85% 90% at center,
    #03111f 0%,
    #041527 20%,
    #051324 40%,
    #06121f 60%,
    #070f18 80%,
    #080d15 100%
  );
`;
const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Stack className="logo_div">
          <Stack className="logo_img">
            <img src={Logo} alt=".." />
          </Stack>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "start",
              width: "90%",
              fontSize: "30px",
            }}
          >
            Welcome To Blogs App
          </Typography>
        </Stack>
        <TextField type="text" variant="outlined" label="Enter Name" />
        <TextField type="text" variant="outlined" label="Enter Email" />
        <TextField type="password" variant="outlined" label="Enter Password" />
        <Button variant="contained">Enter</Button>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
