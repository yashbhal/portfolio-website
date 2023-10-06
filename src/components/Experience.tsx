import React from 'react';
import { Box, Flex, Heading, Text, VStack, Image } from '@chakra-ui/react';
import experienceImage from '../assets/guy-on-computer-thinking.png';

const Experience = () => {
  return (
    <Flex
    direction="column"
    justify="center"
    alignItems="center"
    minHeight="100vh"
  >
      <Box w="80%" padding={8}>
      <Box textAlign="center" mb={8}>
          <Heading fontSize="50px">Experience</Heading>
      </Box>
        <VStack spacing={8} alignItems="flex-start" mb={8}>
          <Box>
            <Heading as="h2" size="xl" mb={2}>Software Developer</Heading>
            <Text fontSize="lg" color="gray.500" mb={4}>Microchip Technology</Text>
            <Text fontSize="lg" textAlign="justify">
            • Building and maintaining Microchip's 16-bit Bootloader that allows customer to build their own custom bootloader. <br />
            • Developing and maintaining libraries for Microchip's MPLAB X IDE and MPLAB Code Configurator. <br />
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={2}>Software Test Engineer</Heading>
            <Text fontSize="lg" color="gray.500" mb={4}>KPIT Technologies</Text>
            <Text fontSize="lg" textAlign="justify">
            • Worked in an Agile team to design and develop test scripts to automate the functional and stability testing of automotive infotainment systems. <br />
            • Wrote a Python script that reduced manual work, and improved the number of test cases being run per day by 50%.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={2}>Extended Reality Developer</Heading>
            <Text fontSize="lg" color="gray.500" mb={4}>Immersive Creation Studio</Text>
            <Text fontSize="lg" textAlign="justify">
            • Project 1: Worked on redesigning and developing the studio’s website. Also worked on improving its accessibility and the overall user experience in browser as well as virtual reality based experiences. <br /> 
            • Project 2: Building interstitials and environments for virtual and mixed reality experiences. <br /> 
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={2}>Research Assistant</Heading>
            <Text fontSize="lg" color="gray.500" mb={4}>Meteor Labs</Text>
            <Text fontSize="lg" textAlign="justify">
            • Design and development of an Augmented Reality software for iOS, Android, and Microsoft HoloLens using Unity Engine for use across all 4 campuses of Arizona State University for approximately 10,000 students at launch.<br /> 
            • Worked on building and testing a ReactJS based form connected to a Firebase back-end which will be used by the users of the software and will allow them to provide data to the software. <br /> 
            • Migrated the software’s storage database from Firebase to AWS and improved data organization in the backend.<br /> 
            • Identified and fixed multiple bugs related to the use of user’s phone camera improving security and quality of the software.<br /> 
            • Worked in a team of 5 under a project lead using Trello Boards and Agile methodology.<br /> 
            </Text>
          </Box>
        </VStack>
      </Box>
      <Flex justifyContent="center" alignItems="center">
        <Box>
            <Image src = {experienceImage} boxSize="400px" />
      </Box>
      </Flex>
    </Flex>
  );
};

export default Experience;