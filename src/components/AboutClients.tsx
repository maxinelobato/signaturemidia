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
import { Angelica } from './Angelica';
// import { ReactElement } from 'react';
import { ButtonWTP } from './ButtonWTP';
import { Humberto } from './Humberto';

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
      <Container maxW={'7xl'} mt={-28}>
        <Humberto />
        <Angelica />
      </Container>
    </Box>
  );
}
