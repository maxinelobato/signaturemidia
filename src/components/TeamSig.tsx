/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { UsersThree } from 'phosphor-react';
import { ButtonWTP } from './ButtonWTP';

export function TeamSig() {
  return (
    <Box bgGradient="linear(to-b, blackAlpha.900, blackAlpha.600 150%)">
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
            <UsersThree size={36} weight="fill" />
            <Box
              ml="2"
              color="whiteAlpha.800"
              fontSize="lg"
              textAlign="center"
              fontWeight="bold"
            >
              Conheça a Signature Mídia
            </Box>
          </Box>
        </VStack>
        <Heading
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          maxW="4xl"
          fontStyle="italic"
        >
          Mais que um time, uma família unida por um único propósito que não foi
          ensinado para nós nas escolas e nas faculdades. Ajudar a todos os
          profissionais autonomos a conseguir mais clientes através do Marketing Digital
        </Heading>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            <Center py={6}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
              >
                <Avatar
                  size={'xl'}
                  src={''}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  Arthur Saraiva
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                  @ArthurSaraiva
                </Text>
                <Stack mt={8} direction={'column'} spacing={4}>
                  <Button size="sm">Fale Com o Arthur</Button>
                </Stack>
              </Box>
            </Center>
            <Center py={6}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
              >
                <Avatar
                  size={'xl'}
                  src={''}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  César Murilo
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                  @CesarMurilo
                </Text>
                <Stack mt={8} direction={'column'} spacing={4}>
                  <Button size="sm">Fale Com o Murilo</Button>
                </Stack>
              </Box>
            </Center>
            <Center py={6}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
              >
                <Avatar
                  size={'xl'}
                  src={''}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  Thaís Barreto
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                  @ThaisBarreto
                </Text>
                <Stack mt={8} direction={'column'} spacing={4}>
                  <Button size="sm">Fale Com a Thaís</Button>
                </Stack>
              </Box>
            </Center>
            <Center py={6}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
              >
                <Avatar
                  size={'xl'}
                  src={''}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  Maxine Lobato
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                  @maxinelobato
                </Text>
                <Stack mt={8} direction={'column'} spacing={4}>
                  <Button size="sm">Fale Com a Maxine</Button>
                </Stack>
              </Box>
            </Center>
          </SimpleGrid>
        </Container>
      </Stack>
    </Box>
  );
}
