import { Box, Flex, Container, Image, Center } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export function NavbarOption() {
  return (
    <>
      <Box
        w="full"
        position="fixed"
        zIndex={3}
        backdropFilter="auto"
        backdropBlur="1rem"
        bgColor="blackAlpha.400"
        borderBottom="1px"
        borderBottomColor="#dd6b20"
      >
        <Container maxW="7xl" pt={2}>
          <Flex flex={1} h={16} alignItems="center" justifyContent="center">
            <Flex alignItems="center">
              <Image
                height={{ base: 32, md: 36 }}
                width={{ base: 32, md: 36 }}
                src="/signaturemidia.svg"
                alt="Signature Logo"
              />
            </Flex>
          </Flex>
          <Center mt={-3} fontFamily="heading" fontSize="sm">
            <Typewriter
              options={{
                strings: ['A sua assinatura no digital'],
                autoStart: true,
                loop: true,
                delay: 20,
              }}
            />
          </Center>
        </Container>
      </Box>
    </>
  );
}
