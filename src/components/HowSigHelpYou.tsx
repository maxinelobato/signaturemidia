/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Image as NextImage,
} from '@chakra-ui/react';
import { Handshake } from 'phosphor-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper';
import { useEffect } from 'react';

export function HowSigHelpYou() {
  // useEffect(() => {
  //   const stylesheet = document.styleSheets[0];
  //   stylesheet.insertRule(
  //     '.swiper-pagination-bullet-active { background: #dd6b20 !important;}',
  //     0
  //   );
  // }, []);

  return (
    <Box bgGradient="linear(to-t, rgba(193, 94, 3, 0.5), blackAlpha.700 80%)">
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
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          >
            <Text color="orange.300" textShadow="#000 1px 1px">
              Nossa missão é ajudar pequenas e médias empresas a se posicionarem e
              venderem mais através das mídias sociais.
            </Text>{' '}
            <Text color="whiteAlpha.800" as="span" textShadow="#000 1px 1px">
              Fazemos isso para que você possa enxergar a oportunidade de negócio em
              anúncios pagos no Google e Instagram, seja para atrair mais clientes ou se
              posicionar melhor, construindo sua autoridade.
            </Text>{' '}
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
      <VStack align="center" direction="column">
        <Container maxW="5xl" pb={8} pt={8}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          >
            <Text color="whiteAlpha.800" textShadow="#000 1px 1px">
              Veja algumas dos nossos projetos de
            </Text>{' '}
            <Text color="orange.300" textShadow="#000 1px 1px" as="span">
              Landing Pages e Sites Institucionais aprovados pelos nossos clientes
            </Text>{' '}
          </Heading>
        </Container>
        <Box
          rounded="lg"
          boxSize={{ base: '21em', md: '3xl' }}
          overflow="hidden"
          boxShadow="dark-lg"
          flex={1}
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, EffectCards]}
          >
            <SwiperSlide>
              <Box rounded="lg" boxSize={{ base: 'xs', md: '2xl' }}>
                <NextImage sizes="auto" rounded="lg" src="/img/jessicalp.jpg" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box rounded="lg" boxSize={{ base: 'xs', md: '2xl' }}>
                <NextImage sizes="auto" rounded="lg" src="/img/mayanalp.jpg" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box rounded="lg" boxSize={{ base: 'xs', md: '2xl' }}>
                <NextImage sizes="auto" rounded="lg" src="/img/humbertolp.jpg" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box rounded="lg" boxSize={{ base: 'xs', md: '2xl' }}>
                <NextImage sizes="auto" rounded="lg" src="/img/gustavolp.jpg" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box rounded="lg" boxSize={{ base: 'xs', md: '2xl' }}>
                <NextImage sizes="auto" rounded="lg" src="/img/contadorlp.jpg" />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </VStack>
    </Box>
  );
}
