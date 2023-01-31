import { Box, Flex, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { InstagramLogo } from 'phosphor-react';

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
        <Box
          p={4}
          backdropFilter="auto"
          backdropBlur="1rem"
          bgColor="blackAlpha.200"
          boxShadow="lg"
          border="1px solid"
          borderColor="whiteAlpha.200"
          rounded="lg"
        >
          <VStack>
            <Stack justify="center">
              <Box display="flex" mt="2" alignItems="center">
                <Box color="blackAlpha.700">Siga o nosso Instagram</Box>
              </Box>
            </Stack>
            <Stack justify="center">
              <Box display="flex" mt="2" alignItems="center">
                <Box color="blackAlpha.700">
                  <InstagramLogo size={32} weight="fill" />
                </Box>
                <Text as="span" color="blackAlpha.700">
                  @signature.midia
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Box>
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
