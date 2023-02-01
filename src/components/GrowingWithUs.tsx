/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  ArrowSquareOut,
  CircleWavyCheck,
  Heart,
  PresentationChart,
  UsersThree,
} from 'phosphor-react';

export function GrowingWithUs() {
  return (
    <Box bgGradient="linear(to-b, blackAlpha.900, blackAlpha.600 150%)">
      <Container maxW={'5xl'}>
        <Stack
          py={28}
          px={12}
          spacing={{ base: 8, md: 20 }}
          align={'center'}
          direction={'column'}
        >
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
            maxW="3xl"
            fontStyle="italic"
          >
            "Você sabia que no Brasil tem 134 milhões de usuários de internet e 59% das
            buscas são sobre produtos e serviços"
          </Heading>
          <Box
            textAlign={'center'}
            as={Link}
            href="https://sebraeseunegocio.com.br/artigo/brasil-tem-134-milhoes-de-usuarios-de-internet-e-59-das-buscam-sao-sobre-produtos-e-servicos/"
            isExternal
          >
            <Text fontWeight={600}>Sebrae Meu Negócio</Text>
            <Text fontSize={'sm'} color="orange.200">
              Notícias
              <Icon as={ArrowSquareOut} mx="3px" mb="-2px" />
            </Text>
          </Box>
          <Heading
            color="orange.400"
            fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
            maxW="3xl"
          >
            Alguns dos nossos clientes tiveram um faturamento de até 60% em seus
            negócios, seguindo nossas orientações dessa forma...
          </Heading>
          <Box
            p={4}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgGradient="linear(to-r, transparent, whiteAlpha.200)"
            shadow="lg"
            rounded="lg"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Flex
              justifyContent={{ base: 'center', md: 'center' }}
              direction={{ base: 'column-reverse', md: 'column' }}
            >
              <Container maxW={'6xl'}>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
                  <VStack align={'center'} py={5}>
                    <Box color={'orange.400'} px={2}>
                      <CircleWavyCheck size={'4em'} weight="fill" />
                    </Box>
                    <VStack align={'start'}>
                      <Box>
                        <Heading
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          Clientes qualificados chegando no seu {''}
                          <Text color="orange.400" as="span">
                            WhatsApp.
                          </Text>{' '}
                          {/* ou pelo{' '}
                          <Text color="orange.400" as="span">
                            Fúnil de Leads do
                          </Text>{' '}
                          <Text
                            as={Link}
                            color="blue.400"
                            fontStyle="italic"
                            href="https://leadster.com.br/"
                            isExternal
                          >
                            Leadster
                          </Text> */}
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack align={'center'} py={5}>
                    <Box color={'orange.400'} px={2}>
                      <PresentationChart size={'4em'} weight="fill" />
                    </Box>
                    <VStack align={'start'}>
                      <Box>
                        <Heading
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          Métricas enviadas semanalmente através do{' '}
                          <Text
                            as={Link}
                            color="orange.400"
                            fontStyle="italic"
                            href="https://support.google.com/looker-studio/answer/6283323?hl=pt-BR"
                            isExternal
                          >
                            Google Data Studio
                          </Text>
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack align={'center'} py={5}>
                    <Box color={'orange.400'} px={2}>
                      <UsersThree size={'4em'} weight="fill" />
                    </Box>
                    <VStack align={'start'}>
                      <Box>
                        <Heading
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          <Text
                            as={Link}
                            color="orange.400"
                            href="https://meet.google.com/"
                            isExternal
                          >
                            Reuniões mensais no Google Meet
                          </Text>{' '}
                          para melhorar as estratégias de marketing do seu negócio e
                          escalar ainda mais{' '}
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack align={'center'} py={5}>
                    <Box color={'orange.400'} px={2}>
                      <Heart size={'4em'} weight="fill" />
                    </Box>
                    <VStack align={'start'}>
                      <Box>
                        <Heading
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          <Text
                            as={Link}
                            color="orange.400"
                            href="https://www.instagram.com/signature.midia/"
                            isExternal
                          >
                            Atendimento personalizado
                          </Text>
                          , ou seja, cada cliente é único e damos todo o suporte para
                          melhor atendê-lo{' '}
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                </SimpleGrid>
              </Container>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
