/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  StatLabel,
  VStack,
  Stat,
  Center,
} from '@chakra-ui/react';
import {
  Lightbulb,
  NumberCircleFour,
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
} from 'phosphor-react';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, icon } = props;

  return (
    <Stat
      px={{ base: 5, md: 4 }}
      py={5}
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor="whiteAlpha.50"
      shadow="xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="lg"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'center' }}
        direction={{ base: 'column-reverse', md: 'column' }}
      >
        <Box>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <VStack>
              <Box color="orange.400" my="auto">
                {icon}
              </Box>
            </VStack>
            <Box color="whiteAlpha.800" p={5}>
              <StatLabel
                fontSize={['sm', 'md', 'lg']}
                fontWeight={'normal'}
                textAlign={{ base: 'center', md: 'left' }}
              >
                {title}
              </StatLabel>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Stat>
  );
}

export function AboutHelpYou() {
  return (
    <>
      <Box
        zIndex={0}
        maxW="100%"
        maxH="auto"
        bgImage="./img/bgmkt.webp"
        bgSize="cover"
        bgPosition="center"
      >
        <Box bgGradient="linear(to-b, blackAlpha.900, rgba(193, 94, 3, 0.5) 150%)">
          <Container maxW={'7xl'}>
            <Stack minH={'100vh'}>
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
                  <Lightbulb size={36} weight="fill" />
                  <Box
                    ml="2"
                    color="whiteAlpha.800"
                    fontSize="lg"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    Nossa Solução
                  </Box>
                </Box>
              </VStack>
              <Stack textAlign={'center'} align={'center'} py={{ base: 12, md: 20 }}>
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
                  <Stack textAlign={'center'}>
                    <SimpleGrid
                      columns={{ base: 1, md: 1 }}
                      spacing={{ base: 5, lg: 5 }}
                    >
                      <StatsCard
                        title={
                          'Caso a resposta seja NÃO, nós da Signature Mídia iremos te mostrar como os nossos clientes alcançam mais clientes todos os meses'
                        }
                        icon={<NumberCircleOne size={'5em'} weight="duotone" />}
                      />
                      <StatsCard
                        title={
                          'A nossa missão é fazer você ter mais reconhecimento, posicionamento e escala para ter clientes qualificados fechando contratos com você'
                        }
                        icon={<NumberCircleTwo size={'5em'} weight="duotone" />}
                      />
                      <StatsCard
                        title={
                          'Esqueça a compra de seguidores, isso NÃO PAGA suas contas'
                        }
                        icon={<NumberCircleThree size={'5em'} weight="duotone" />}
                      />
                      <StatsCard
                        title={
                          'Ter a oportunidade de transformar o seu negócio, para que ele seja sólido na internet, trazendo solidez e recorrência'
                        }
                        icon={<NumberCircleFour size={'5em'} weight="duotone" />}
                      />
                    </SimpleGrid>
                  </Stack>
                </Container>
              </Center>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
