/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowSquareOut, Handshake } from 'phosphor-react';

export function HowSigHelpYou() {
  return (
    <Box bgGradient="linear(to-tl, rgba(193, 94, 3, 0.5), blackAlpha.700 80%)">
      <Container maxW={'5xl'}>
        <Stack
          py={8}
          px={8}
          spacing={{ base: 8, md: 20 }}
          align={'center'}
          direction={'column'}
        >
          <VStack spacing={4}>
            <Box
              backdropFilter="auto"
              backdropBlur="1rem"
              bgColor="whiteAlpha.50"
              shadow="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              rounded="lg"
              alignItems="center"
              display="flex"
              mt="2"
              p={5}
            >
              <Handshake size={36} weight="fill" />
              <Box
                ml="2"
                color="whiteAlpha.800"
                fontSize="lg"
                textAlign="center"
                fontWeight="bold"
              >
                O que a{' '}
                <Text as="span" color="orange.400">
                  Signature Mídia
                </Text>{' '}
                faz?
              </Box>
            </Box>
          </VStack>
          <Heading
            color="whiteAlpha.800"
            fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
            maxW="3xl"
          >
            Nossa missão é ajudar pequenas e médias empresas a se posicionarem e
            venderem mais através das mídias sociais.
            <Text>
              Fazemos isso para que você possa enxergar a oportunidade de negócio em
              anúncios pagos no Google e Instagram, seja para atrair mais clientes ou se
              posicionar melhor, construindo sua autoridade.
            </Text>
          </Heading>
          <Box
            p={4}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgGradient="linear(to-b, transparent, whiteAlpha.200)"
            shadow="lg"
            rounded="lg"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
              <Box>
                <Heading
                  fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
                  textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                  maxW="2xl"
                  fontStyle="italic"
                >
                  São <Text color="orange.400">+ de 50 clientes</Text> satisfeitos
                </Heading>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
                  textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                  maxW="2xl"
                  fontStyle="italic"
                >
                  São <Text color="orange.400">+ de 40 Landing Pages</Text> criadas para
                  vários negócios
                </Heading>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
                  textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                  maxW="2xl"
                  fontStyle="italic"
                >
                  São <Text color="orange.400">+ de 33 feedbacks</Text> no Google
                </Heading>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
