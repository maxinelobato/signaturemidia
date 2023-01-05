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
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { ArrowSquareOut, Heart, InstagramLogo } from 'phosphor-react';
import { ButtonWTP } from './ButtonWTP';

export function Humberto() {
  const Slide = require('react-reveal/Slide');
  return (
    <Stack direction={{ base: 'column', md: 'row' }} minH={'100vh'} pt={12}>
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
              Conheça alguns dos nossos <i>cases</i> de sucesso na área de Direito
              Criminal
            </Text>{' '}
            <Text color="orange.300" as="span" textShadow="#000 1px 1px">
              Dr. Humberto Pedrosa
            </Text>{' '}
          </Heading>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'whiteAlpha.700'}
            textAlign={{ base: 'center', md: 'center', lg: 'left' }}
          >
            O Humberto Predrosa é um especialista em Direito Criminal, um dos maiores
            desafios dele era a captação de clientes, ele mesmo disse: "Um escritório
            não é igual uma loja de roupas, que a pessoa olha e diz Ahh que escritório
            lindo, vou entrar!". <br />
            Em 14 dias fechou 1 contrato de 8 mil e em menos de 1 mês mais 3 contratos.
          </Text>
          <Stack spacing={6}>
            <Text color="orange.200" textAlign={{ base: 'center', md: 'left' }}>
              Relatório de Métricas | Google Ads
            </Text>
            <StatGroup>
              <Flex direction={{ base: 'column', md: 'row' }}>
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, lg: 14 }}>
                  <Stat>
                    <StatLabel color="blue.400">Cliques</StatLabel>
                    <StatNumber>635</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      635
                    </StatHelpText>
                    <StatHelpText>
                      <Link
                        color="orange.200"
                        href="https://support.google.com/google-ads/answer/31799"
                        isExternal
                      >
                        Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
                      </Link>
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel color="red.400">Impressões</StatLabel>
                    <StatNumber>10.750</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      10.750
                    </StatHelpText>
                    <StatHelpText>
                      <Link
                        color="orange.200"
                        href="https://support.google.com/google-ads/answer/6320"
                        isExternal
                      >
                        Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
                      </Link>
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel color="yellow.400">CPC Médio</StatLabel>
                    <StatNumber>3,43</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      3,43
                    </StatHelpText>
                    <StatHelpText>
                      <Link
                        color="orange.200"
                        href="https://support.google.com/google-ads/answer/14074"
                        isExternal
                      >
                        Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
                      </Link>
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel color="green.400">Conversões</StatLabel>
                    <StatNumber>153</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      153
                    </StatHelpText>
                    <StatHelpText>
                      <Link
                        color="orange.200"
                        href="https://support.google.com/google-ads/answer/6032150"
                        isExternal
                      >
                        Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
                      </Link>
                    </StatHelpText>
                  </Stat>
                </SimpleGrid>
              </Flex>
            </StatGroup>
          </Stack>
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
                objectFit="cover"
                src="/img/humberto.webp"
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
                href="https://www.instagram.com/humbertopedrosa.adv/"
                isExternal
              >
                @humbertopedrosa.adv
              </Button>
            </Box>
          </Slide>
        </Center>
      </Flex>
    </Stack>
  );
}
