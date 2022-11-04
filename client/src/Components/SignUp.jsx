import { Box, Button, Img, Input } from "@chakra-ui/react";
// import { response } from "express";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const signupdetails = {
  name: "",
  email: "",
  password: "",
};
export default function Signup() {
  const [signup, setSignup] = useState(signupdetails);

  let onInput = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
    // console.log(name, value);
  };

  const signupUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = signup;
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Img
        boxSize={["150px", "250px", "300px"]}
        margin="auto"
        src="./Black and Apricot Thumbnail-Friendly Sports Logo.png"
      />

      <Box boxSize={["15%", "24%", "30%"]} margin="auto">
        <form onSubmit={signupUser}>
          <Input
            name="name"
            onChange={(e) => onInput(e)}
            placeholder="Name"
            marginTop={["12px", "24px", "36px"]}
          />
          <Input
            name="email"
            onChange={(e) => onInput(e)}
            placeholder="Email"
            marginTop={["6px", "12px", "18px"]}
          />
          <Input
            name="password"
            onChange={(e) => onInput(e)}
            placeholder="Password"
            marginTop={["6px", "12px", "18px"]}
          />
          <Input
            size="md"
            marginTop={["6px", "12px", "18px"]}
            colorScheme="cyan"
            type="submit"
            value="Register"
            placeholder="Signup"
            // onClick={()=>signupUser()}
          />
        </form>
        <br />
        <Button variant={"link"}>
        <Link to="/login">Already have an Account</Link></Button>
      </Box>
    </>
  );
}
