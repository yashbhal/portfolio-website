import React from 'react';
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="flex-end"
      wrap="wrap"
      padding={6}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      color={colorMode === 'light' ? 'gray.800' : 'white'}
    >
      <Link href="https://github.com/yashbhal" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<FaGithub />}
          size="lg"
          variant="ghost"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/yashbhal/" isExternal>
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          size="lg"
          variant="ghost"
        />
      </Link>
    </Flex>
  );
};

export default Navbar;
