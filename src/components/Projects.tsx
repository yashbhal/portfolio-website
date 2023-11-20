import * as React from "react";
import { Box, Flex, Image, Link, Heading, Text } from "@chakra-ui/react";
import projectImage from "../assets/logo.svg";

const Projects = () => {
  const projects = [
    {
      name: "Interdisciplinary Project Marketplace - NASA Psyche",
      image: projectImage,
      description:
        `Collaborated in a team of 5 with the NASA Psyche Program, ASU Founder’s Lab and the Entrepreneurship and Innovation Institute at ASU 
        to build a website to host interdisciplinary projects from clients that students and faculty can apply to be a part of. `,
      link: "https://www.youtube.com/watch?v=WFbEml6nfHs",
    },
    {
      name: "Augmented Reality Menu App",
      image: projectImage,
      description:
        `Developed a cross-platform AR Restaurant Menu App using Unity, Vuforia, and C# that displays restaurant menu items in a more visual and exciting manner. 
        the high-quality 3D food models were created using Photogrammetry and Blender.`,   
      link: "https://github.com/yashbhal",
    },
    {
      name: "Gesture Based YouTube Player",
      image: projectImage,
      description:
        `Built a gesture-driven interface for YouTube playback on PC using ML on a Raspberry Pi Pico. 
         The data required was acquired by establishing communication with a MPU-6050 accelerometer over I2C protocol. 
         Finally, the touchless interface was implemented using Python via PyAutoGUI. `,
      link: "https://github.com/yashbhal",
    },
  ];

  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box w="80%" padding={8}>
      <Box textAlign="center" mb={8}>
          <Heading fontSize="50px">Projects</Heading>
      </Box>
      <Flex justify="center" alignItems="stretch" flexWrap="wrap">

        {projects.map((project, index) => (
          <Box
            key={index}
            maxW="md"
            borderWidth="0"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            m={4}
            transition="all 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            flex="0 0 calc(33.33% - 2rem)"
          >
            <Image
              src={project.image}
              alt={project.name}
              boxSize="200px"
              objectFit="cover"
              mx="auto"
            />
            <Box p={4}>
              <Text fontWeight="bold" fontSize="xl">
                {project.name}
              </Text>
              <Text mt={2} mb={4}>
                {project.description}
              </Text>
              <Link href={project.link} isExternal>
                Visit website
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
      </Box>
    </Flex>
  );
};

export default Projects;
