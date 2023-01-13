import {
  Box,
  Container,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowArcLeft, Heart } from 'phosphor-react';
import { Angelica } from './Angelica';
import { Humberto } from './Humberto';

export function AboutClients() {
  return (
    <>
      <Box bgGradient="linear(to-t, blackAlpha.900, rgba(193, 94, 3, 0.5) 150% )">
        <Container maxW={'7xl'} pt={16}>
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
              <Heart size={36} weight="fill" />
              <Box
                ml="2"
                color="whiteAlpha.800"
                fontSize="lg"
                textAlign="center"
                fontWeight="bold"
              >
                Nossos Clientes
              </Box>
            </Box>
          </VStack>
          <Stack textAlign={'center'} align={'center'} py={{ base: 12, md: 14 }}>
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              textAlign={{ base: 'center', md: 'center', lg: 'center' }}
            >
              <Text color="whiteAlpha.800">Conheça alguns dos nossos</Text>{' '}
              <Text color="orange.300" as="span" textShadow="#000 1px 1px">
                <i>cases</i> de Sucesso
              </Text>{' '}
            </Heading>
          </Stack>
          <Tabs variant="solid-rounded" colorScheme="orange">
            <TabList>
              <Tab>Direito Criminal</Tab>
              <Tab>Direito de Família</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Humberto />
              </TabPanel>
              <TabPanel>
                <Angelica />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
}
