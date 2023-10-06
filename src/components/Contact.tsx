import React, { useState } from 'react';
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();
    console.log(data);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <VStack h="100%" spacing="6" align="center" py="10">
      <Heading>Contact Me</Heading>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl id="name" w="50%">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" w="50%">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="message" w="50%">
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit" mt="6">
          Send
        </Button>
      </form>
    </VStack>
  );
};

export default Contact;
