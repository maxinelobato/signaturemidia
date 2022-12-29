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
} from '@chakra-ui/react';
import { Smiley } from 'phosphor-react';

export function Navbar() {
  return (
    <>
      <Box w={'full'} position={'absolute'}>
        <Container maxW="6xl" as={Stack}>
          <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
            <Flex flex={{ base: 1 }} justify={['center', 'center', 'left']}>
              <Text
                as="h3"
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontSize={['sm', 'lg', '2xl']}
                color={useColorModeValue('gray.800', 'white')}
              >
                MS Advocacia & Assessoria Jurídica
              </Text>
            </Flex>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={2}>
                <Button leftIcon={<Smiley size={22} />}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
                    isExternal
                  >
                    (98) 98125-8283
                  </Link>
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box p={[8, 4, 0]} />
    </>
  );
}
