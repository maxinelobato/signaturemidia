import { Box, Button, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { InstagramLogo } from 'phosphor-react';
import Image from 'next/image';

export function Humberto() {
  return (
    <Stack direction={{ base: 'column', md: 'column' }} minH={'50vh'} pb={10}>
      <Flex flex={1} align="center" justifyContent="center">
        <Center py={6}>
          <Box boxShadow="dark-lg" rounded="lg" overflow="hidden">
            <Image
              loading="lazy"
              height={300}
              width={400}
              alt="..."
              src="/img/humberto.webp"
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
            <Button
              borderRadius="none"
              w="full"
              color="whiteAlpha.800"
              bgColor="blackAlpha.800"
              leftIcon={<InstagramLogo size={32} weight="fill" />}
              style={{ pointerEvents: 'none' }}
            >
              @humbertopedrosa.adv
            </Button>
          </Box>
        </Center>
      </Flex>
      <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Text
          fontSize={{ base: 'md', lg: 'lg' }}
          color={'whiteAlpha.700'}
          textAlign={'center'}
        >
          <Text color="orange.300" as="span" textShadow="#000 1px 1px">
            O Dr. Humberto Pedrosa {''}
          </Text>
          é um especialista em Direito Criminal e um dos maiores desafios dele era a
          captação de clientes, ele mesmo disse:{' '}
          <i>
            &quot;Um escritório não é igual uma loja de roupas, que a pessoa olha e diz
            Ahh que escritório lindo, vou entrar!&quot;.
          </i>{' '}
          <br />
          Em 14 dias fechou 1 contrato de 8 mil e em menos de 1 mês mais 3 contratos.
        </Text>
      </Stack>
    </Stack>
  );
}
