import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Angelica } from './Angelica';
import { Humberto } from './Humberto';

export function SucessCases() {
  return (
    <>
      <Box bgGradient="linear(to-t, blackAlpha.900, rgba(193, 94, 3, 0.5) 150% )">
        <Container maxW={'7xl'}>
          <Stack textAlign={'center'} align={'center'} py={10}>
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              textAlign={{ base: 'center', md: 'center', lg: 'center' }}
            >
              <Text color="whiteAlpha.800">Conheça alguns dos nossos</Text>{' '}
              <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                <i>cases</i> de Sucesso
              </Text>{' '}
            </Heading>
          </Stack>
          <Stack
            minH={'50vh'}
            direction={{ base: 'column-reverse', md: 'row-reverse' }}
          >
            <Flex flex={1} justifyContent="center" align="center">
              <Angelica />
            </Flex>
            <Flex flex={1} justifyContent="center" align="center">
              <Humberto />
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
