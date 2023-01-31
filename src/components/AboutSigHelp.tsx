/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Center,
  Highlight,
  HStack,
} from '@chakra-ui/react';
import { CaretRight } from 'phosphor-react';
import { ButtonWTP } from './ButtonWTP';

export function AboutSigHelp() {
  const LightSpeed = require('react-reveal/LightSpeed');
  return (
    <>
      <Box
        bgImage="/img/bgmkt.svg"
        h="auto"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgPos="center"
        pos="relative"
        _loading={{ _loading: 'lazy' }}
      >
        <Box bgGradient="linear(to-b, blackAlpha.900, rgba(193, 94, 3, 0.5) 150%)">
          <Container maxW={'2xl'}>
            <Stack textAlign={'center'} align={'center'} py={12}>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                <Text color="whiteAlpha.800">Você está feliz com a</Text>{' '}
                <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                  <i>captação de clientes</i> no seu negócio?
                </Text>{' '}
              </Heading>
            </Stack>
            <Center>
              <Container maxW={'2xl'}>
                <Stack textAlign={'center'} pb={12}>
                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 5, lg: 5 }}>
                    <Box
                      px={{ base: 1, md: 1 }}
                      py={5}
                      backdropFilter="auto"
                      backdropBlur="1rem"
                      bgColor="blackAlpha.500"
                      shadow="xl"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      rounded="lg"
                    >
                      <Flex
                        justifyContent={{ base: 'center', md: 'center' }}
                        direction={{ base: 'column-reverse', md: 'column' }}
                      >
                        <Container maxW={'6xl'}>
                          {/* TEXTO 1 */}
                          <LightSpeed left cascade>
                            <HStack align={'center'} py={5}>
                              <Box color={'orange.400'} px={2}>
                                <CaretRight size={'4em'} weight="fill" />
                              </Box>
                              <VStack align={'start'}>
                                <Text
                                  fontSize={['sm', 'md', 'lg']}
                                  fontWeight={'normal'}
                                  textAlign={{ base: 'center', md: 'left' }}
                                >
                                  <Highlight
                                    query={['NÃO', 'Signature Mídia']}
                                    styles={{
                                      py: '1',
                                      fontWeight: 'bold',
                                      color: 'orange.400',
                                    }}
                                  >
                                    Caso a resposta seja não, nós da Signature Mídia
                                    iremos te mostrar como os nossos clientes alcançam
                                    mais clientes todos os meses
                                  </Highlight>
                                </Text>
                              </VStack>
                            </HStack>

                            {/* TEXTO 2 */}

                            <HStack align={'center'} py={5}>
                              <Box color={'orange.400'} px={2}>
                                <CaretRight size={'4em'} weight="fill" />
                              </Box>
                              <VStack align={'start'}>
                                <Text
                                  fontSize={['sm', 'md', 'lg']}
                                  fontWeight={'normal'}
                                  textAlign={{ base: 'center', md: 'left' }}
                                >
                                  <Highlight
                                    query={[
                                      'missão',
                                      'reconhecimento',
                                      'posicionamento',
                                      'e escala',
                                    ]}
                                    styles={{
                                      py: '1',
                                      fontWeight: 'bold',
                                      color: 'orange.400',
                                    }}
                                  >
                                    A nossa missão é fazer você ter mais reconhecimento,
                                    posicionamento e escala para ter clientes
                                    qualificados fechando contratos com você
                                  </Highlight>
                                </Text>
                              </VStack>
                            </HStack>

                            {/* TEXTO 3 */}

                            <HStack align={'center'} py={5}>
                              <Box color={'orange.400'} px={2}>
                                <CaretRight size={'4em'} weight="fill" />
                              </Box>
                              <VStack align={'start'}>
                                <Text
                                  fontSize={['sm', 'md', 'lg']}
                                  fontWeight={'normal'}
                                  textAlign={{ base: 'center', md: 'left' }}
                                >
                                  <Highlight
                                    query={['Esqueça', 'seguidores', 'não', 'paga']}
                                    styles={{
                                      py: '1',
                                      fontWeight: 'bold',
                                      color: 'orange.400',
                                    }}
                                  >
                                    Esqueça a compra de seguidores, isso não paga suas
                                    contas
                                  </Highlight>
                                </Text>
                              </VStack>
                            </HStack>

                            {/* TEXTO 4 */}

                            <HStack align={'center'} py={5}>
                              <Box color={'orange.400'} px={2}>
                                <CaretRight size={'4em'} weight="fill" />
                              </Box>
                              <VStack align={'start'}>
                                <Text
                                  fontSize={['sm', 'md', 'lg']}
                                  fontWeight={'normal'}
                                  textAlign={{ base: 'center', md: 'left' }}
                                >
                                  <Highlight
                                    query={[
                                      'oportunidade',
                                      'transformar',
                                      'negócio',
                                      'sólido',
                                    ]}
                                    styles={{
                                      py: '1',
                                      fontWeight: 'bold',
                                      color: 'orange.400',
                                    }}
                                  >
                                    Aproveite a oportunidade de transformar o seu
                                    negócio para que ele seja sólido e recorrente na
                                    internet
                                  </Highlight>
                                </Text>
                              </VStack>
                            </HStack>
                          </LightSpeed>
                        </Container>
                      </Flex>
                    </Box>
                    <Center>
                      <ButtonWTP />
                    </Center>
                  </SimpleGrid>
                </Stack>
              </Container>
            </Center>
          </Container>
        </Box>
      </Box>
    </>
  );
}
