import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      
        <Box w="100%" h="50px" border="1px solid red" pos="sticky" top="0" display="flex" alignItems="center"
        fontFamily={"'Josefin Sans', sans-serif"} justifyContent="space-between">
          <Box></Box>
          <Box>GM BLOG WEBSITE</Box>
          <Box>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </Box>
        </Box>
        
    </div>
  )
}
