import { Box, Container } from '@chakra-ui/react';
import { Angelica } from './Angelica';
import { Humberto } from './Humberto';

export function AboutClients() {
  return (
    <Box bgGradient="linear(to-br, gray.900, gray.900, gray.700 50%)">
      <Container maxW={'7xl'} mt={{ base: '-28', md: '-28' }}>
        <Humberto />
        <Angelica />
      </Container>
    </Box>
  );
}
