import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ArrowSquareDownRight, Info } from 'phosphor-react';

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction="row" align="center" justifyContent="left">
      <Flex w={16} h={16} align="center" justify="left" rounded="full">
        {icon}
      </Flex>
      <Text fontWeight={600} align="left">
        {text}
      </Text>
    </Stack>
  );
};

export function Faq() {
  return (
    <Box bgGradient="linear(to-t, rgba(193, 94, 3, 0.5), blackAlpha.700 80%)">
      <Container maxW="5xl" py={6} as={Stack} spacing={12}>
        <VStack spacing={6}>
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
            <Info size={36} weight="fill" />
            <Box
              ml="2"
              color="whiteAlpha.800"
              fontSize="lg"
              textAlign="center"
              fontWeight="bold"
            >
              Informações Importantes
            </Box>
          </Box>
        </VStack>
        <Heading
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
        >
          <Text color="whiteAlpha.800">Dúvidas frequentes sobre o nosso trabalho</Text>{' '}
          <Text color="orange.300" textShadow="#000 1px 1px">
            Você também pode falar diretamente com nossos especialistas
          </Text>{' '}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 1, lg: 6 }}>
          <Container maxW={'5xl'}>
            <Box position="relative">
              <Accordion allowToggle reduceMotion>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Qual o retorno do investimento?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2" textAlign="justify">
                        Irá depender do seu seguimento, quando se trata de serviços, a
                        obrigação do gestor de tráfego é entregar os leads, ou seja,
                        clientes qualificados para chegarem no seu Whatsapp ou usando o
                        Leadster e todo o processo de fechamento e acompanhamento do
                        cliente é de responsabilidade sua. Mas se for para um produto em
                        específico tudo irá depender de variáveis como concorrência,
                        qualidade, recorrência e autoridade, ou seja, se é um produto
                        conhecido no mercado.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Preciso assinar contrato?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">
                        Nós fazemos contrato se você quiser, mas não temos nenhuma
                        cláusula de obrigatoriedade para com o cliente e vice versa. Nós
                        deixamos o cliente livre para ir e vir, caso seja para pessoa
                        jurídica nós iremos conversar com os responsáveis para chegarmos
                        a um senso comum e ver a possibilidade de um contrato.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Qual a diferença de uma landing page para um site?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">
                        A Landing Page é uma única página contendo uma copy, ou seja, um
                        texto persuasivo que irá envolver e entender o que o cliente
                        quer para executar determinada ação, seja para clicar em um
                        botão e falar com você pelo whatsapp, clicar em um botão para
                        ser redirecionado para efetuar uma compra, preencher um
                        formulário, utilizar o leadster, é o que chamamos de CTA (Call
                        to action) ou chamada para ação. Entre outras funcionalidades,
                        mas a principal é converter o lead.
                      </Text>
                      <Text pt="2">
                        Já o site tem outra finalidade, como missão, valores,
                        informações de localização, abas de contato, etc.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Domínio e hospedagem estão inclusos?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">
                        Não, nossa equipe de desenvolvimento e web designer irá lhe
                        auxiliar qual o melhor serviço irá se adequar ao que você
                        precisa.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Qual o prazo para a entrega do projeto?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">
                        Irá depender da demanda e da dimensão do projeto, cada projeto é
                        personalizado de acordo com cada cliente e para isso nós
                        precisamos elaborar junto com a nossa equipe a melhor estratégia
                        para o seu negócio.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Preciso pagar a manutenção da landing page ou site?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">
                        No primeiro momento não, mas o recomendável é fazer uma
                        manutenção pelo menos 1 vez ao ano para que sua página não fique
                        defasada.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={
                              <Icon
                                as={ArrowSquareDownRight}
                                w={12}
                                h={12}
                                weight="fill"
                              />
                            }
                            text={'Tem garantia?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">
                        Sim, assim como todos os produtos e serviços por Lei, ou seja,
                        um prazo de 7 dias.
                      </Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Container>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
