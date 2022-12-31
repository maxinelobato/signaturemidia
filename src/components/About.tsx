import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  IconProps,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowBendRightDown } from 'phosphor-react';
import { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { ButtonPLAY } from './ButtonPLAY';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex align="center" justify="center" bg={iconBg} rounded="lg">
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export function About() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <Box bgGradient="linear(to-t, gray.900, blackAlpha.900)">
      <Container maxW={'7xl'} pt={28} pb="44">
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} align={'center'} justify={'left'}>
            <Stack p={{ base: '8', md: '0' }} spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                <Text color="whiteAlpha.900" as={'span'}>
                  Está com dificuldade de conseguir mais clientes pro teu negócio?
                </Text>{' '}
                <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                  Faça parte dos 50 clientes que já ajudamos com o Marketing Digital
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
                Por que investir em Marketing Digital? Veja o recado de um dos nossos
                especialistas
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <ButtonPLAY />
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
              zIndex={1}
              color="whiteAlpha.900"
            />
            {isSSR ? null : (
              <Box
                display="flex"
                overflow="hidden"
                rounded="lg"
                boxShadow="0 4px 8px 0 rgba(255, 255, 255, 0.8), 0 2px 20px 0 rgba(255, 255, 255, 0.8);"
                zIndex={1}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=AM-IW0Krod4"
                  controls
                />
              </Box>
            )}
          </Flex>
        </Stack>
        <Stack justifyContent="center" align="center" direction="row" h="100px">
          <Divider borderRadius="4px" borderColor="orange.400" variant="solid" />
          <IconButton
            color="orange.400"
            style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
            variant="unstyled"
            w={16}
            h={16}
            rounded="full"
            aria-label="Role Down"
            icon={<ArrowBendRightDown size={40} weight="fill" />}
          />
          <Divider borderRadius="4px" borderColor="orange.400" variant="solid" />
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} align={'center'} justify={'left'}>
            <Stack p={{ base: '8', md: '0' }} spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                <Text color="whiteAlpha.900" as={'span'}>
                  Está com dificuldade de conseguir mais clientes pro teu negócio?
                </Text>{' '}
                <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                  Faça parte dos 50 clientes que já ajudamos com o Marketing Digital
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
                Por que investir em Marketing Digital? Veja o recado de um dos nossos
                especialistas
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <ButtonPLAY />
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
              zIndex={1}
              color="whiteAlpha.900"
            />
            {isSSR ? null : (
              <Box
                display="flex"
                overflow="hidden"
                rounded="lg"
                boxShadow="0 4px 8px 0 rgba(255, 255, 255, 0.8), 0 2px 20px 0 rgba(255, 255, 255, 0.8);"
                zIndex={1}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=AM-IW0Krod4"
                  controls
                />
              </Box>
            )}
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
