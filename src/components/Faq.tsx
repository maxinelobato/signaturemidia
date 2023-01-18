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
import { Info, Lamp } from 'phosphor-react';

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'} justifyContent={'center'}>
      <Flex w={16} h={16} align={'center'} justify={'center'} rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600} align={'center'}>
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
              <Accordion allowToggle reduceMotion={true}>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={Lamp} w={16} h={16} />}
                            text={'Texto 1'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">Texto 1</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={Lamp} w={16} h={16} />}
                            text={'Texto 2'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">Texto 2</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={Lamp} w={16} h={16} />}
                            text={'Texto 3'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">Texto 3</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="center">
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={Lamp} w={16} h={16} />}
                            text={'Texto 4'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Text pt="2">Texto 4</Text>
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
