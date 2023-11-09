import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="absolute"
      bottom="0"
      width="100%"
      textAlign="center"
      p={1}
      backgroundColor="blue.100"
    >
      &copy; 2023 Yash Bhalchandra. All Rights Reserved.
    </Box>
  );
};

export default Footer;
