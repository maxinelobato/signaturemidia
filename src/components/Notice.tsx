/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Icon, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { ArrowSquareOut, NewspaperClipping } from 'phosphor-react';

export function Notice() {
  return (
    <Box bgGradient="linear(to-b, blackAlpha.900, blackAlpha.600 150%)">
      <Stack
        py={8}
        px={8}
        spacing={{ base: 8, md: 20 }}
        align={'center'}
        direction={'column'}
      >
        <VStack spacing={4}>
          <Box
            backdropFilter="auto"
            backdropBlur="1rem"
            bgColor="whiteAlpha.50"
            shadow="xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="lg"
            alignItems="center"
            display="flex"
            mt="2"
            p={5}
          >
            <NewspaperClipping size={36} weight="fill" />
            <Box
              ml="2"
              color="whiteAlpha.800"
              fontSize="lg"
              textAlign="center"
              fontWeight="bold"
            >
              Você sabia...
            </Box>
          </Box>
        </VStack>
        <Heading
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          maxW="3xl"
          fontStyle="italic"
        >
          "...que no Brasil tem 134 milhões de usuários de internet e 59% das buscas são
          sobre produtos e serviços"
        </Heading>
        <Box
          textAlign={'center'}
          as={Link}
          href="https://sebraeseunegocio.com.br/artigo/brasil-tem-134-milhoes-de-usuarios-de-internet-e-59-das-buscam-sao-sobre-produtos-e-servicos/"
          isExternal
        >
          <Text fontWeight={600}>Sebrae Meu Negócio</Text>
          <Text fontSize={'sm'} color="orange.200">
            Notícias
            <Icon as={ArrowSquareOut} mx="3px" mb="-2px" />
          </Text>
        </Box>
        <Heading
          pt={-10}
          pb={6}
          color="orange.400"
          fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          maxW="3xl"
        >
          Alguns dos nossos clientes tiveram um faturamento de até 60% em seus negócios
          com a nossa ajuda
        </Heading>
      </Stack>
    </Box>
  );
}
