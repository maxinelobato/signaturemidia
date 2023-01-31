import { Stack, Flex, Text, Center, Box, Button } from '@chakra-ui/react';
import { InstagramLogo } from 'phosphor-react';
import Image from 'next/image';

export function Angelica() {
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
              src="/img/angelica.webp"
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
              @advangelicaramos
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
            A Dra. Angélica Ramos {''}
          </Text>
          é uma advogada especialista em Direito de Família e Sucessões, uma das suas
          maiores vontades era alavancar sua carreira ainda mais com o Tráfego Pago.
          Após 7 dias de Tráfego no Google Ads, ela já obteve o fechamento de 1 contrato
          e 1 consultoria. <br />
          Em menos de 1 mês já totalizou 4 contratos fechados.
        </Text>
      </Stack>
    </Stack>
  );
}
