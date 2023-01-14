import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  VStack,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { GoogleLogo, Star } from 'phosphor-react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor="whiteAlpha.300"
      shadow="xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      rounded="lg"
      boxShadow={'lg'}
      p={8}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: 'whiteAlpha.300',
        pos: 'absolute',
        bottom: '-17px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const ReviewsGoogle = {
  rating: 4,
};

export function WithSpeechBubbles() {
  return (
    <Box bgGradient="linear(to-bl, rgba(193, 94, 3, 0.5), blackAlpha.700 80%)">
      <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
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
            <GoogleLogo size={36} weight="fill" />
            <Box
              ml="2"
              color="whiteAlpha.800"
              fontSize="lg"
              textAlign="center"
              fontWeight="bold"
            >
              Google Avaliações
            </Box>
          </Box>
        </VStack>
        <Stack spacing={0} align={'center'}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          >
            <Text color="whiteAlpha.800">O que os nossos clientes dizem</Text>{' '}
            <Text color="orange.300" as="span" textShadow="#000 1px 1px">
              Nós trabalhamos para que os nossos clientes tenham o melhor resultado
            </Text>{' '}
          </Heading>
        </Stack>
        <Stack
          justifyContent="center"
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Jéssica Castro</TestimonialHeading>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                  <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
                    6 meses atrás
                  </Box>
                </Box>
                <TestimonialText>
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://goo.gl/maps/QW4c3tmNHeRmZt3T6"
                    isExternal
                  >
                    A signature presta um serviço de excelente qualidade. Sempre me
                    atendeu muito bem, sempre no prazo, de forma personalizada e foi
                    essencial para desenvolver meu negócio! Recomendo demais!
                  </Link>
                </TestimonialText>
              </TestimonialContent>
              <Link
                style={{ textDecoration: 'none' }}
                href="https://www.instagram.com/meio_juridico/"
                isExternal
              >
                <TestimonialAvatar
                  src={'/img/jessicacastro.jpg'}
                  name={'Jéssica Castro'}
                  title={'@meio_juridico'}
                />
              </Link>
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Jéssica Castro</TestimonialHeading>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                  <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
                    6 meses atrás
                  </Box>
                </Box>
                <TestimonialText>
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://goo.gl/maps/QW4c3tmNHeRmZt3T6"
                    isExternal
                  >
                    A signature presta um serviço de excelente qualidade. Sempre me
                    atendeu muito bem, sempre no prazo, de forma personalizada e foi
                    essencial para desenvolver meu negócio! Recomendo demais!
                  </Link>
                </TestimonialText>
              </TestimonialContent>
              <Link
                style={{ textDecoration: 'none' }}
                href="https://www.instagram.com/meio_juridico/"
                isExternal
              >
                <TestimonialAvatar
                  src={'/img/jessicacastro.jpg'}
                  name={'Jéssica Castro'}
                  title={'@meio_juridico'}
                />
              </Link>
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Jéssica Castro</TestimonialHeading>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                  <Box as="span" ml="2" color="whiteAlpha.800" fontSize="sm">
                    6 meses atrás
                  </Box>
                </Box>
                <TestimonialText>
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://goo.gl/maps/QW4c3tmNHeRmZt3T6"
                    isExternal
                  >
                    A signature presta um serviço de excelente qualidade. Sempre me
                    atendeu muito bem, sempre no prazo, de forma personalizada e foi
                    essencial para desenvolver meu negócio! Recomendo demais!
                  </Link>
                </TestimonialText>
              </TestimonialContent>
              <Link
                style={{ textDecoration: 'none' }}
                href="https://www.instagram.com/meio_juridico/"
                isExternal
              >
                <TestimonialAvatar
                  src={'/img/jessicacastro.jpg'}
                  name={'Jéssica Castro'}
                  title={'@meio_juridico'}
                />
              </Link>
            </Testimonial>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
