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
    <Box
      bgColor="blackAlpha.700"
      shadow="base"
      borderTop="1px"
      borderColor="rgba(193, 94, 3, 0.5)"
    >
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
            css={{ filter: 'drop-shadow(0 0 1rem rgba(193, 94, 3, 0.4))' }}
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
            bgGradient="linear(to-r, orange.400, orange.200)"
            color="blackAlpha.900"
            w="full"
            rounded="lg"
            style={{ textDecoration: 'none' }}
            _hover={{
              color: 'blackAlpha.800',
              transition: '0.5s',
            }}
            leftIcon={<InstagramLogo size={32} weight="fill" />}
            href="https://www.instagram.com/signature.midia/"
            isExternal
          >
            Siga o nosso Instagram
          </Button>
          <Button
            as={Link}
            bgGradient="linear(to-r, orange.400, orange.200)"
            color="blackAlpha.900"
            w="full"
            rounded="lg"
            style={{ textDecoration: 'none' }}
            _hover={{
              color: 'blackAlpha.800',
              transition: '0.5s',
            }}
            leftIcon={<GoogleLogo size={32} weight="fill" />}
            href="https://www.instagram.com/signature.midia/"
            isExternal
          >
            Veja nossos Feedbacks
          </Button>
        </Stack>
        <VStack>
          <HStack justify="center" mt={10} pb={4}>
            <Text textAlign="center" fontSize="smaller">
              &copy;Signature Mídia | 2023. Todos os Direitos Reservados.
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
