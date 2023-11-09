import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import aboutImage from "../assets/guy-on-computer-small.png";


const About = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h = "100vh">
        <Box w="80%" padding = {8}>
          <Flex alignItems="center" mb={6}>
            <Box mr={6}>
              <Image src={aboutImage} alt="About image" maxW="50%" width = "50vw"/>
            </Box>
            <Box>
              <Text fontSize="xl">
              I graduated from Arizona State University with an undergraduate degree in Computer Science and currently work as a Software Developer at Microchip Technology. <br />
              I'm passionate about technology and am interested in the fields of mixed reality (AR, VR, and XR), machine learning, and embedded software development. <br />
              I love solving problems, learning new skills, and enjoy working in interdisciplinary teams to build great products.<br /> 
              When I have free time, you can catch me on the soccer field, immersed in video games, or tinkering with code.       
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  };
  
  export default About;
