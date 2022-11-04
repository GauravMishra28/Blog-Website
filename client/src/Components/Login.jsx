import { Box, Button, Img, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const logindetails= {
    email:'',
    password:'',
}
export default function Login() {
  const[signup,setSignup]= useState(logindetails)


  let onInput = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setSignup({...signup,[name]:value})
    // console.log(name, value);
  };

const loginUser= async(e)=>{
  e.preventDefault()
  const {email,password}= signup
const response=  await fetch("http://localhost:8080/login",{
    method: "POST",
    headers: {
      'Content-Type':"application/json",
    },
    body: JSON.stringify({
     email,
     password
    })
  })
  const data= await response.json()
//   console.log(data)
  if(data.user){
      alert("Login Successfull")
      window.location.href= '/'
  }
  else{
      alert("Check Username and Password")
  }
}
  return (
    <>
      <Img
        boxSize={["150px", "250px", "300px"]}
        margin="auto"
        src="./Black and Apricot Thumbnail-Friendly Sports Logo.png"
      />
        <Box boxSize={["15%", "24%", "30%"]} margin="auto">
          <form onSubmit={loginUser}>
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
            placeholder="Login"
          />
          </form>
          <br />
          <Button variant={"link"}>
            <Link to="/signup"> Create an Account</Link>
          </Button>
          <Link to="/">Home</Link>
        </Box>

        </>)}