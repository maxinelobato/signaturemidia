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
  Icon,
} from '@chakra-ui/react';
import { ArrowSquareOut, Heart, Quotes, Star } from 'phosphor-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor="blackAlpha.500"
      rounded="lg"
      boxShadow="base"
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
        borderTopColor: 'blackAlpha.500',
        pos: 'absolute',
        bottom: '-16px',
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
    <Text textAlign={'center'} color="whiteAlpha.900" fontSize={'sm'}>
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
      <Avatar loading="lazy" size="lg" src={src} mb={2}></Avatar>
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
  rating: 5,
};

export function GoogleReviews() {
  return (
    <Box bgImage="/img/googlereviews.svg" h="auto" bgSize="cover" bgRepeat="no-repeat">
      <Box bgGradient="linear(to-b, rgba(193, 94, 3, 0.5), blackAlpha.700 80%)">
        <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              textAlign={{ base: 'center', md: 'center', lg: 'center' }}
            >
              <Text color="whiteAlpha.800">
                O que os nossos clientes dizem sobre nós
              </Text>{' '}
              <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                no Google Meu Negócio sobre os nossos resultados
              </Text>{' '}
            </Heading>
            <Stack pt={4} align={'center'} textAlign="center">
              <Link
                style={{ textDecoration: 'none' }}
                href="https://g.page/r/CafZRYsKoFPhEAg/review"
                isExternal
              >
                <Text color="orange.300" fontSize="lg">
                  Veja mais Avaliações dos nossos clientes{' '}
                  <Icon as={ArrowSquareOut} mx="2px" mb="-2px" />
                </Text>
              </Link>
            </Stack>
          </Stack>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <Stack
              justifyContent="center"
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}
            >
              <SwiperSlide>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                  <Testimonial>
                    <TestimonialContent>
                      <Quotes size={28} weight="fill" />
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
                      </Box>
                      <TestimonialText>
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://goo.gl/maps/QW4c3tmNHeRmZt3T6"
                          isExternal
                        >
                          A signature presta um serviço de excelente qualidade. Sempre
                          me atendeu muito bem, sempre no prazo, de forma personalizada
                          e foi essencial para desenvolver meu negócio! Recomendo
                          demais!
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
                      <Quotes size={28} weight="fill" />
                      <TestimonialHeading>Gustavo Barreto</TestimonialHeading>
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
                      </Box>
                      <TestimonialText>
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://goo.gl/maps/96tmFPjWBFPpAsW68"
                          isExternal
                        >
                          Melhor agência marketing para advogados! Atendimento e
                          prestação de serviços impecáveis. Recomendo!
                        </Link>
                      </TestimonialText>
                    </TestimonialContent>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://www.instagram.com/glb.advocacia/"
                      isExternal
                    >
                      <TestimonialAvatar
                        src={'/img/gustavo.webp'}
                        name={'Gustavo Barreto'}
                        title={'@glb.advocacia'}
                      />
                    </Link>
                  </Testimonial>
                  <Testimonial>
                    <TestimonialContent>
                      <Quotes size={28} weight="fill" />
                      <TestimonialHeading>Mayana Silva</TestimonialHeading>
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
                      </Box>
                      <TestimonialText>
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://goo.gl/maps/gXDZjXNUpvEs5qho6"
                          isExternal
                        >
                          O Sr. Murilo foi excelente em seu trabalho, muito atencioso, e
                          fez um excelente trabalho . Agradeço muito
                        </Link>
                      </TestimonialText>
                    </TestimonialContent>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://www.instagram.com/mayanasilva_adv/"
                      isExternal
                    >
                      <TestimonialAvatar
                        src={'/img/may.jpg'}
                        name={'Mayana Silva'}
                        title={'@mayanasilva_adv'}
                      />
                    </Link>
                  </Testimonial>
                </SimpleGrid>
              </SwiperSlide>
              <SwiperSlide>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                  <Testimonial>
                    <TestimonialContent>
                      <Quotes size={28} weight="fill" />
                      <TestimonialHeading>Marlon Dettenborn</TestimonialHeading>
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
                      </Box>
                      <TestimonialText>
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://goo.gl/maps/QW4c3tmNHeRmZt3T6https://goo.gl/maps/W3zm3FfJKL3AsBCs7"
                          isExternal
                        >
                          Atendimento extremamente competente e profissional. Com
                          certeza o serviço é excelente! …
                        </Link>
                      </TestimonialText>
                    </TestimonialContent>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://www.instagram.com/marlondett/"
                      isExternal
                    >
                      <TestimonialAvatar
                        src={'/img/marlon.jpg'}
                        name={'Marlon Dettenborn'}
                        title={'@marlondett'}
                      />
                    </Link>
                  </Testimonial>
                  <Testimonial>
                    <TestimonialContent>
                      <Quotes size={28} weight="fill" />
                      <TestimonialHeading>Camila Alves</TestimonialHeading>
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
                      </Box>
                      <TestimonialText>
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://goo.gl/maps/NvjdrBqhKWQwZFmH6"
                          isExternal
                        >
                          Tive uma experiência incrível com a signature mídia, Arthur e
                          Maxine são incríveis, me instruíram e ajudaram a nadar nessas
                          águas (ainda tão desconhecidas) do digital. Muita gratidão! 🙏
                        </Link>
                      </TestimonialText>
                    </TestimonialContent>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://www.instagram.com/camilaalvesrezende/"
                      isExternal
                    >
                      <TestimonialAvatar
                        src={'/img/camila.jpg'}
                        name={'Camila ALves'}
                        title={'@camilaalvesrezende'}
                      />
                    </Link>
                  </Testimonial>
                  <Testimonial>
                    <TestimonialContent>
                      <Quotes size={28} weight="fill" />
                      <TestimonialHeading>Angelica Lopes</TestimonialHeading>
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
                      </Box>
                      <TestimonialText>
                        <Link
                          style={{ textDecoration: 'none' }}
                          href="https://goo.gl/maps/jbNUpVwY8p6dgqnp8"
                          isExternal
                        >
                          Fui atendida pela Maxine, super atenciosa e prestativa!!!
                          Recomendo muito
                        </Link>
                      </TestimonialText>
                    </TestimonialContent>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://www.instagram.com/advangelicaramos/"
                      isExternal
                    >
                      <TestimonialAvatar
                        src={'/img/angelica.webp'}
                        name={'Angelica Lopes'}
                        title={'@advangelicaramos'}
                      />
                    </Link>
                  </Testimonial>
                </SimpleGrid>
              </SwiperSlide>
            </Stack>
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
}
