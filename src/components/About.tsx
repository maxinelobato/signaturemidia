import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  ArrowBendUpRight,
  ArrowFatRight,
  Play,
  PlayCircle,
  WhatsappLogo,
} from 'phosphor-react';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export function About() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <Box bgGradient="linear(to-r, blackAlpha.800 10%, blackAlpha.700 20%, blackAlpha.500)">
      <Container maxW={'7xl'} pt={28}>
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="whiteAlpha.900" as={'span'}>
                  São mais de 50 Advogados satisfeitos
                </Text>{' '}
                <Text color="#C15E03" as="span" textShadow="#000 1px 1px">
                  com o Tráfego no Google Ads
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
                Entenda como funciona o nosso mercado com um de nossos especialistas em
                Tráfego Pago
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  size="lg"
                  bgColor="#C15E03"
                  _hover={{ bgColor: 'orange.400', transition: '0.5s' }}
                  rightIcon={<PlayCircle size={32} weight="fill" />}
                >
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
                    isExternal
                  >
                    Entenda como funciona
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Blob
              w="150%"
              h="150%"
              position="absolute"
              top="-20%"
              left={0}
              zIndex={-1}
              color="#C15E03"
              overflow="hidden"
            />
            {isSSR ? null : <ReactPlayer controls url="/video/humberto.mp4" />}
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
