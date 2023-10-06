import * as React from "react";
import { Box, Flex, Image, Link, Heading, Text } from "@chakra-ui/react";
import projectImage from "../assets/logo.svg";

const Projects = () => {
  const projects = [
    {
      name: "Personal Website",
      image: projectImage,
      description:
        "A personal website that acts as a landing spot to learn about me and what I do. This was built as an experimental learning project using Typescript, ChakraUI, and ChatGPT. ",
      link: "https://github.com/yashbhal",
    },
    {
      name: "Airplane Landing System",
      image: projectImage,
      description:
        "A C++ program to improve landing systems at one-runway airports. This was built to learn more about C++, and understand the implementation of data structures and algorithms.",
      link: "https://github.com/yashbhal",
    },
    {
      name: "Movie Recommender",
      image: projectImage,
      description:
        "A Python project made during lockdown that suggests a random movie to watch by scraping through IMDb's Top 250 Movies List. This was built to learn Python, and understand web-scraping.",
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
      <Flex justify="center" alignItems="center" flexWrap="wrap">

        {projects.map((project, index) => (
          <Box
            key={index}
            maxW="lg"
            borderWidth="0"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            m={4}
            transition="all 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            flex="1 1 300px"
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
