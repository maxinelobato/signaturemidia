import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { InstagramLogo } from 'phosphor-react';

export function Footer() {
  return (
    <Box
      bgGradient="linear(to-r, blackAlpha.900, blackAlpha.400 )"
      borderTop="2px"
      borderColor="#dd6b20"
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        w="full"
        justify="center"
      >
        <Flex justify="center">
          <Image
            src="/signaturemidia.svg"
            alt="Company Logo"
            rounded="lg"
            width={{
              base: '150px',
              lg: '200px',
            }}
            height={{
              base: '75px',
              lg: '100px',
            }}
          />
        </Flex>
      </Stack>
      <Center mt={-3}>
        <Text fontFamily="Quicksand" fontSize="sm" color="whiteAlpha.900">
          A sua assinatura no digital
        </Text>
      </Center>
      <VStack py={8}>
        <HStack justify="center">
          <Button
            as={Link}
            w="full"
            leftIcon={<InstagramLogo size={32} weight="fill" />}
            style={{ textDecoration: 'none' }}
            _hover={{
              bgColor: 'blackAlpha.900',
              color: 'orange.300',
              transition: '0.5s',
            }}
            href="https://www.instagram.com/signature.midia/"
            isExternal
          >
            Siga o nosso Instagram
          </Button>
        </HStack>
        <VStack>
          <HStack justify="center" mt={10}>
            <Text textAlign="center" fontSize="smaller">
              &copy;Signature Mídia | 2023. Todos os Direitos Reservados.
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
