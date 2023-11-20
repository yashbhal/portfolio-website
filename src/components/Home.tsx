import React from 'react';
import { Box, Heading, Text, Center, Image } from '@chakra-ui/react';
import logo from '../assets/y-high-resolution-logo-white-on-black-background.png'; // import your logo image here

const Home = () => {
  return (
    <Center height="100vh">
      <Box textAlign="center" alignContent={'center'}>
        <Image src={logo} alt="My Logo" width="20vw" mx="auto" mb="6" maxW="100%" />
        <Heading as="h1" size="2xl" mb="4">
          Yash Bhalchandra
        </Heading>
        <Text fontSize="xl">
          Software Engineer | Tech Enthusiast
        </Text>
        <Text fontSize="sm">
          This website is currently under construction.
        </Text>
      </Box>
    </Center>
  );
};

export default Home;
