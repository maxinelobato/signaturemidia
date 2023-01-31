/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { UsersThree } from 'phosphor-react';

export function MeetSignature() {
  return (
    <Box bgGradient="linear(to-b, rgba(193, 94, 3, 0.5), blackAlpha.700 80%)">
      <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
        <Stack textAlign={'center'} align={'center'}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          >
            <Text color="whiteAlpha.800">Conheça a</Text>{' '}
            <Text color="orange.300" as="span" textShadow="#000 1px 1px">
              <i>Signature Midia</i>
            </Text>{' '}
          </Heading>
        </Stack>
        <Heading
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
        >
          <Text color="whiteAlpha.800">
            A Signature Midia é especializada em ajudar as empresas a alcançar seus
            objetivos de negócios através da utilização de estratégias e técnicas
            avançadas de marketing digital.
          </Text>{' '}
          <Text color="orange.300" as="span" textShadow="#000 1px 1px">
            Com uma equipe altamente capacitada e experiente, oferece soluções
            personalizadas e eficazes para aumentar a visibilidade online, atrair e
            reter clientes e impulsionar o crescimento do negócio.
          </Text>{' '}
        </Heading>
        {/* <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 4, md: 6 }}>
          <Box
            maxW={'320px'}
            w={'full'}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgColor="whiteAlpha.50"
            shadow="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="lg"
            p={6}
            textAlign={'center'}
          >
            <Avatar
              loading="lazy"
              size={'xl'}
              src={'/img/arthur.jpg'}
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
              Advogado, Sócio Fundador e Gestor de Tráfego
            </Text>
            <Stack mt={8} direction={'column'} spacing={4}>
              <Button
                href="https://www.instagram.com/arthurcsaraiva/"
                style={{ textDecoration: 'none' }}
                as={Link}
                size="sm"
                isExternal
              >
                Fale Com o Arthur
              </Button>
            </Stack>
          </Box>
          <Box
            maxW={'320px'}
            w={'full'}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgColor="whiteAlpha.50"
            shadow="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="lg"
            p={6}
            textAlign={'center'}
          >
            <Avatar
              loading="lazy"
              size={'xl'}
              src={'/img/murilo.jpg'}
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
              Sócio Fundador, Prospecção e Web Designer
            </Text>
            <Stack mt={8} direction={'column'} spacing={4}>
              <Button
                href="https://www.instagram.com/cesarmurilos/"
                style={{ textDecoration: 'none' }}
                as={Link}
                size="sm"
                isExternal
              >
                Fale Com o Murilo
              </Button>
            </Stack>
          </Box>
          <Box
            maxW={'320px'}
            w={'full'}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgColor="whiteAlpha.50"
            shadow="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="lg"
            p={6}
            textAlign={'center'}
          >
            <Avatar
              loading="lazy"
              size={'xl'}
              src={'/img/thais.jpg'}
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
              Prospecção, Relacionamento e Vendas
            </Text>
            <Stack mt={8} direction={'column'} spacing={4}>
              <Button
                href="https://www.instagram.com/soudosanjos/"
                style={{ textDecoration: 'none' }}
                as={Link}
                size="sm"
                isExternal
              >
                Fale Com a Thaís
              </Button>
            </Stack>
          </Box>
          <Box
            maxW={'320px'}
            w={'full'}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgColor="whiteAlpha.50"
            shadow="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="lg"
            p={6}
            textAlign={'center'}
          >
            <Avatar
              loading="lazy"
              size={'xl'}
              src={'/img/maxine.jpg'}
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
              Vendas, Desenvolvimento e Gestão de Tráfego
            </Text>
            <Stack mt={8} direction={'column'} spacing={4}>
              <Button
                href="https://www.instagram.com/maxinelobato/"
                style={{ textDecoration: 'none' }}
                as={Link}
                size="sm"
                isExternal
              >
                Fale Com a Maxine
              </Button>
            </Stack>
          </Box>
        </SimpleGrid> */}
      </Container>
    </Box>
  );
}
