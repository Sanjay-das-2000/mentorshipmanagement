import React from 'react'
import {Box, Button, Center, Heading, Image, Text} from "@chakra-ui/react";
import img from "../media/img1-removebg-preview.png";
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
        <Box display='flex' justifyContent='center' alignItems='center' h='100vh' w='100vw'>
            <Box display="flex" justifyContent="space-around" w='100vw'>
              <Box>
                <Heading mt="20%" fontSize="4.5rem" w="34vw" color='white'>MENTORSHIP MANAGEMENT SYSTEM</Heading>
                <Box display="flex" mt='5%'>
                  <Center mr='5%'><NavLink to="/studentlogin"><button className='homeButton' >Student login</button></NavLink></Center >
                  <Center><NavLink to="/mentorlogin" ><button className='homeButton'>Mentor login</button></NavLink></Center >
                </Box>
              </Box>
                <Image w="35vw" src={img}/>
            </Box>
        </Box>
    </div>
  )
}
