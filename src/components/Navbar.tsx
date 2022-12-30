import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Container,
  Text,
  useBreakpointValue,
  Link,
  Image,
} from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function Navbar() {
  return (
    <>
      <Box
        w={'full'}
        position="fixed"
        bgColor="blackAlpha.900"
        boxShadow="dark-lg"
        zIndex={2}
      >
        <Container maxW="6xl" as={Stack}>
          <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
            <Flex justify={['center', 'center', 'left']}>
              <Box>
                <Image
                  height={{ base: 32, md: 44 }}
                  width={{ base: 32, md: 44 }}
                  src="/signaturemidia.svg"
                  alt="Signature Logo"
                />
              </Box>
            </Flex>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={2}>
                <Button
                  bgColor="#C15E03"
                  _hover={{ bgColor: 'orange.400', transition: '0.5s' }}
                  leftIcon={<WhatsappLogo size={22} />}
                >
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
                    isExternal
                  >
                    (00) 00000-0000
                  </Link>
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
