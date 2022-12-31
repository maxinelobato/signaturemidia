import {
  Flex,
  Heading,
  // Icon,
  Image,
  Stack,
  Text,
  Box,
  Container,
  Button,
  Center,
  Link,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import {
  // PresentationChart,
  // CurrencyCircleDollar,
  // Browsers,
  Heart,
  InstagramLogo,
} from 'phosphor-react';
// import { ReactElement } from 'react';
import { ButtonWTP } from './ButtonWTP';

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

// const Feature = ({ text, icon, iconBg }: FeatureProps) => {
//   return (
//     <Stack direction="row" align="center">
//       <Flex align="center" justify="center" bg={iconBg} rounded="lg">
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

export function AboutClients() {
  const Slide = require('react-reveal/Slide');
  return (
    <Box bgGradient="linear(to-br, gray.900, gray.900, gray.700 50%)">
      <Container maxW={'7xl'} mt={-28} pb="10" pt="10">
        <Stack direction={{ base: 'column', md: 'row' }} minH={'80vh'}>
          <Flex align="center" justify="center">
            <Stack spacing={6} w={'full'} maxW={'lg'} mr={16}>
              <HStack spacing={4}>
                {['lg'].map((size) => (
                  <Tag size={size} key={size} variant="subtle" colorScheme="orange">
                    <TagLeftIcon boxSize="12px" as={Heart} size={32} weight="fill" />
                    <TagLabel>Nossos Clientes</TagLabel>
                  </Tag>
                ))}
              </HStack>
              <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                <Text color="whiteAlpha.900" as={'span'}>
                  Conheça o case de sucesso da nossa cliente
                </Text>{' '}
                <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                  Angélica Ramos que viu uma oportunidade no Tráfego do Google Ads
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
                A Angélica Ramos é uma advogada especialista em Direito de Família e
                Sucessões, uma das suas maiores vontades era alavancar sua carreira
                ainda mais com o Tráfego Pago. Após 7 dias de campanha rodando, ela já
                obteve o fechamento de 1 contrato e 1 consultoria. Em menos de 1 mês já
                totalizou 4 contratos fechados.
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
              <Slide reset={true} right>
                <Box boxShadow="dark-lg" rounded="lg" overflow="hidden">
                  <Image
                    h="35rem"
                    maxW="100%"
                    alt="..."
                    objectFit="cover"
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
                    _hover={{ bgColor: 'blackAlpha.900', transition: '0.5s' }}
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
      </Container>
    </Box>
  );
}
