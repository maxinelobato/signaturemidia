import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GoogleLogo, InstagramLogo } from 'phosphor-react';

export function Footer() {
  return (
    <Box bgGradient="linear(to-l, #dd6b20, orange.400)" shadow="base">
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        w="full"
        justify="center"
      >
        <Flex justify="center" py={8}>
          <Image
            loading="lazy"
            src="/ico/apple-touch-icon.png"
            alt="Signature Mídia"
            rounded="lg"
            style={{ filter: 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 10))' }}
            width={{
              base: '4rem',
              lg: '4rem',
            }}
            height={{
              base: '4rem',
              lg: '4rem',
            }}
          />
        </Flex>
      </Stack>
      <VStack py={2}>
        <Stack justify="center" direction={{ base: 'column', md: 'row' }}>
          <Button
            as={Link}
            shadow="dark-lg"
            bgGradient="linear(to-r, blackAlpha.900, blackAlpha.800)"
            color="whiteAlpha.900"
            w="full"
            rounded="lg"
            style={{ textDecoration: 'none' }}
            _hover={{
              color: 'orange.400',
              transition: '1.1s',
            }}
            leftIcon={<InstagramLogo size={32} weight="fill" />}
            href="https://www.instagram.com/signature.midia/"
            isExternal
          >
            Siga o nosso Instagram
          </Button>
          <Button
            as={Link}
            shadow="dark-lg"
            bgGradient="linear(to-r, blackAlpha.900, blackAlpha.800)"
            color="whiteAlpha.900"
            w="full"
            rounded="lg"
            style={{ textDecoration: 'none' }}
            _hover={{
              color: 'orange.400',
              transition: '1.1s',
            }}
            leftIcon={<GoogleLogo size={32} weight="fill" />}
            href="https://g.page/r/CafZRYsKoFPhEAg/review"
            isExternal
          >
            Veja nossos Feedbacks
          </Button>
        </Stack>
        <VStack>
          <HStack justify="center" mt={10} pb={4}>
            <Text
              textAlign="center"
              fontSize="smaller"
              color="blackAlpha.700"
              fontWeight="bold"
            >
              &copy;Signature Mídia | 2023. Todos os Direitos Reservados.
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
