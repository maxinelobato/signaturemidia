// import {
//   Stack,
//   Flex,
//   Heading,
//   Text,
//   Center,
//   Box,
//   Image as NextImage,
//   Button,
//   Link,
// } from '@chakra-ui/react';
// import { InstagramLogo } from 'phosphor-react';

// export function Testando() {
//   return (
//     <Stack direction={{ base: 'column', md: 'column' }} minH={'50vh'} pb={10}>
//       {/* <Text color="orange.200" textAlign={{ base: 'center', md: 'left' }}>
//               Relatório de Métricas | Google Ads
//             </Text> */}
//       {/* <StatGroup>
//               <Flex direction={{ base: 'column', md: 'row' }}>
//                 <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, lg: 14 }}>
//                   <Stat>
//                     <StatLabel color="blue.400">Cliques</StatLabel>
//                     <StatNumber>104</StatNumber>
//                     <StatHelpText>
//                       <StatArrow type="increase" />
//                       104
//                     </StatHelpText>
//                     <StatHelpText>
//                       <Link
//                         color="orange.200"
//                         href="https://support.google.com/google-ads/answer/31799"
//                         isExternal
//                       >
//                         Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
//                       </Link>
//                     </StatHelpText>
//                   </Stat>
//                   <Stat>
//                     <StatLabel color="red.400">Impressões</StatLabel>
//                     <StatNumber>1.508</StatNumber>
//                     <StatHelpText>
//                       <StatArrow type="increase" />
//                       1.508
//                     </StatHelpText>
//                     <StatHelpText>
//                       <Link
//                         color="orange.200"
//                         href="https://support.google.com/google-ads/answer/6320"
//                         isExternal
//                       >
//                         Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
//                       </Link>
//                     </StatHelpText>
//                   </Stat>
//                   <Stat>
//                     <StatLabel color="yellow.400">CPC Médio</StatLabel>
//                     <StatNumber>3,15</StatNumber>
//                     <StatHelpText>
//                       <StatArrow type="increase" />
//                       3,15
//                     </StatHelpText>
//                     <StatHelpText>
//                       <Link
//                         color="orange.200"
//                         href="https://support.google.com/google-ads/answer/14074"
//                         isExternal
//                       >
//                         Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
//                       </Link>
//                     </StatHelpText>
//                   </Stat>
//                   <Stat>
//                     <StatLabel color="green.400">Conversões</StatLabel>
//                     <StatNumber>30</StatNumber>
//                     <StatHelpText>
//                       <StatArrow type="increase" />
//                       30
//                     </StatHelpText>
//                     <StatHelpText>
//                       <Link
//                         color="orange.200"
//                         href="https://support.google.com/google-ads/answer/6032150"
//                         isExternal
//                       >
//                         Saiba mais <Icon as={ArrowSquareOut} mx="1px" mb="-2px" />
//                       </Link>
//                     </StatHelpText>
//                   </Stat>
//                 </SimpleGrid>
//               </Flex>
//             </StatGroup>
//           </Stack> */}
//       {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4} py={2}>
//             <ButtonWTP />
//           </Stack> */}
//       <Flex flex={1} align="center" justifyContent="center">
//         <Center py={6}>
//           <Box boxShadow="dark-lg" rounded="lg" overflow="hidden">
//             <NextImage
//               loading="lazy"
//               h="30rem"
//               maxW="100%"
//               alt="..."
//               objectFit="cover"
//               src="/img/angelica.webp"
//               sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               33vw"
//             />
//             <Button
//               as={Link}
//               borderRadius="none"
//               w="full"
//               color="whiteAlpha.800"
//               bgColor="blackAlpha.800"
//               leftIcon={<InstagramLogo size={32} weight="fill" />}
//               style={{ textDecoration: 'none' }}
//               _hover={{
//                 bgColor: 'blackAlpha.900',
//                 color: 'orange.300',
//                 transition: '0.5s',
//               }}
//               href="https://www.instagram.com/advangelicaramos/"
//               isExternal
//             >
//               @advangelicaramos
//             </Button>
//           </Box>
//         </Center>
//       </Flex>
//       <Stack spacing={6} w={'full'} maxW={'lg'}>
//         <Text
//           fontSize={{ base: 'md', lg: 'lg' }}
//           color={'whiteAlpha.700'}
//           textAlign={'center'}
//         >
//           <Text color="orange.300" as="span" textShadow="#000 1px 1px">
//             A Dra. Angélica Ramos {''}
//           </Text>
//           é uma advogada especialista em Direito de Família e Sucessões, uma das suas
//           maiores vontades era alavancar sua carreira ainda mais com o Tráfego Pago.
//           Após 7 dias de Tráfego no Google Ads, ela já obteve o fechamento de 1 contrato
//           e 1 consultoria. <br />
//           Em menos de 1 mês já totalizou 4 contratos fechados.
//         </Text>
//       </Stack>
//     </Stack>
//   );
// }
