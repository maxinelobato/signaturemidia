import {
  // Icon,
  Box,
  Container,
} from '@chakra-ui/react';
import { Angelica } from './Angelica';
// import { ReactElement } from 'react';
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
  return (
    <Box bgGradient="linear(to-br, gray.900, gray.900, gray.700 50%)">
      <Container maxW={'7xl'} mt={-28}>
        <Humberto />
        <Angelica />
      </Container>
    </Box>
  );
}
