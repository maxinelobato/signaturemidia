import {
  Stack,
  Flex,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Heading,
  Text,
  Center,
  Box,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import { Heart, InstagramLogo } from 'phosphor-react';
import { ButtonWTP } from './ButtonWTP';

export function Angelica() {
  const Slide = require('react-reveal/Slide');
  return (
    <Stack direction={{ base: 'column', md: 'row' }} minH={'80vh'}>
      <Flex align="center" justify="center">
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <HStack spacing={4}>
            {['lg'].map((size) => (
              <Tag size={size} key={size} variant="subtle" colorScheme="orange">
                <TagLeftIcon boxSize="12px" as={Heart} size={32} weight="fill" />
                <TagLabel>Nossos Clientes</TagLabel>
              </Tag>
            ))}
          </HStack>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'left' }}
          >
            <Text color="whiteAlpha.900">
              Conheça alguns dos nossos <i>cases</i> de sucesso
            </Text>{' '}
            <Text color="orange.300" as="span" textShadow="#000 1px 1px">
              Dra. Angélica Ramos
            </Text>{' '}
          </Heading>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'whiteAlpha.700'}
            textAlign={{ base: 'center', md: 'center', lg: 'left' }}
          >
            A Angélica Ramos é uma advogada especialista em Direito de Família e
            Sucessões, uma das suas maiores vontades era alavancar sua carreira ainda
            mais com o Tráfego Pago. Após 7 dias de campanha rodando, ela já obteve o
            fechamento de 1 contrato e 1 consultoria. Em menos de 1 mês já totalizou 4
            contratos fechados.
          </Text>
          {/* <Stack spacing={6}>
                <Feature
                  icon={<Icon as={Browsers} color="purple.500" w={16} h={16} />}
                  iconBg="whiteAlpha.50"
                  text="Efetuamos uma Análise Financeira na sua Empresa para poder iniciarmos os próximos passos"
                />
                <Feature
                  icon={
                    <Icon as={CurrencyCircleDollar} color="green.500" w={16} h={16} />
                  }
                  iconBg="whiteAlpha.50"
                  text="Iniciamos um Planejamento Financeiro com base na Análise, alinhando expectativas reais para os próximos anos"
                />
                <Feature
                  icon={
                    <Icon as={PresentationChart} color="yellow.500" w={16} h={16} />
                  }
                  iconBg="whiteAlpha.50"
                  text="Montamos um Plano de Ação de acordo com a necessidade da sua Empresa"
                />
              </Stack> */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} py={2}>
            <ButtonWTP />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align="center" justifyContent="right">
        <Center py={6}>
          <Slide duration={400} right>
            <Box boxShadow="dark-lg" rounded="lg" overflow="hidden">
              <Image
                h="30rem"
                maxW="100%"
                alt="..."
                objectFit="contain"
                src="/img/angelica.webp"
              />
              <Button
                as={Link}
                borderRadius="none"
                w="full"
                color="whiteAlpha.900"
                bgColor="blackAlpha.800"
                leftIcon={<InstagramLogo size={32} weight="fill" />}
                style={{ textDecoration: 'none' }}
                _hover={{
                  bgColor: 'blackAlpha.900',
                  color: 'orange.300',
                  transition: '0.5s',
                }}
                href="https://www.instagram.com/advangelicaramos/"
                isExternal
              >
                @advangelicaramos
              </Button>
            </Box>
          </Slide>
        </Center>
      </Flex>
    </Stack>
  );
}
