import { Box, Flex, Stack, Container, Image } from '@chakra-ui/react';
import { ButtonWTP } from './ButtonWTP';

export function Navbar() {
  return (
    <>
      <Box w={'full'} position="absolute" zIndex={2}>
        <Container maxW={'7xl'} pt={2}>
          <Flex flex={1} h={24} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={['center', 'center', 'left']}>
              <Image
                loading="lazy"
                height={{ base: 32, md: 44 }}
                width={{ base: 32, md: 44 }}
                src="/signaturemidia.svg"
                alt="Signature Logo"
              />
            </Flex>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={2}>
                <ButtonWTP />
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
