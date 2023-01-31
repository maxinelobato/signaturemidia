import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { ButtonWTP } from './ButtonWTP';

export function HomePage() {
  return (
    <Box bgGradient="linear(to-t, blackAlpha.900, rgba(193, 94, 3, 0.5) 150% )">
      <Container maxW={'3xl'} pt={14}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Stack spacing={6} align={'center'} textAlign={'center'}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              <Text color="whiteAlpha.800" as={'span'}>
                Se você está com dificuldade de conseguir mais clientes.
              </Text>{' '}
              <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                Nós já ajudamos mais de 60 empresas em menos de 1 ano a escalar seus
                negócios
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
              Entenda por que eles investiram em Marketing Digital? Veja alguns dos
              nossos cases de sucesso que em 7 e 14 dias fecharam seus primeiros
              contratos.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <ButtonWTP />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
