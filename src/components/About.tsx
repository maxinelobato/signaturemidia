import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  Stack,
  Text,
  Image as NextImage,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { Play } from 'phosphor-react';
// import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
import { ButtonPLAY } from './ButtonPLAY';
import { ButtonWTP } from './ButtonWTP';
// import Player from './VideoPlayer/Player';

export function About() {
  // const [isSSR, setIsSSR] = useState(true);
  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);

  return (
    <Box bgGradient="linear(to-t, blackAlpha.900, rgba(193, 94, 3, 0.5) 150% )">
      <Container maxW={'7xl'} pt={28} pb="20">
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} align="center" justify="left">
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                textAlign={{ base: 'center', md: 'center', lg: 'left' }}
              >
                <Text color="whiteAlpha.800" as={'span'}>
                  Se você está com dificuldade de conseguir mais clientes
                </Text>{' '}
                <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                  Nós já ajudamos mais de 50 clientes em menos de 1 ano a escalar seus
                  negócios
                </Text>{' '}
              </Heading>
              <Text
                fontSize={{ base: 'md', lg: 'lg' }}
                color={'whiteAlpha.700'}
                textAlign={{ base: 'center', md: 'center', lg: 'left' }}
              >
                Por que investir em Marketing Digital? Veja a live que fizemos do
                Humberto que em 14 dias fechou seu primeiro contrato de 8mil em uma ação
                Criminal.
              </Text>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                py={2}
                pb={8}
              >
                <ButtonWTP />
                <ButtonPLAY />
              </Stack>
            </Stack>
          </Flex>
          <Flex
            flex={1}
            justify={'center'}
            align="center"
            position={'relative'}
            w={'full'}
          >
            <Blob
              w="150%"
              h="150%"
              position="absolute"
              top="-20%"
              left={0}
              color="whiteAlpha.800"
            />
            {/* {isSSR ? null : ( */}
            <Box
              zIndex={1}
              overflow="hidden"
              h="35rem"
              maxW="100%"
              rounded="lg"
              boxShadow="0 4px 8px 0 rgba(255, 255, 255, 0.8), 0 2px 20px 0 rgba(255, 255, 255, 0.8);"
            >
              {/* <ReactPlayer
                  width="auto"
                  height="35rem"
                  url="/video/humberto.mp4"
                  controls
                />
              <Player src="/video/humberto.mp4" /> */}
              <IconButton
                as={Link}
                aria-label={'Play Button'}
                variant="solid"
                bgColor="blackAlpha.900"
                _hover={{
                  bgColor: 'orange.400',
                  transition: '0.4s',
                }}
                icon={<Play size={24} weight="fill" />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
                href="https://www.instagram.com/p/CkRnSKVJf4Y/"
                isExternal
              />

              <NextImage
                loading="lazy"
                h="35rem"
                maxW="100%"
                alt="..."
                objectFit="cover"
                src="/img/livehumberto.jpg"
              />
            </Box>
            {/* )} */}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
