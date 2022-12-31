import { Stack, IconButton, Container } from '@chakra-ui/react';
import { CaretCircleDoubleDown } from 'phosphor-react';

export function DividerStyle() {
  return (
    <Container maxW={'7xl'}>
      <Stack justifyContent="center" align="center" direction="row" mt={-40} mb={36}>
        {/* <Divider borderRadius="4px" borderColor="orange.400" variant="solid" /> */}
        <IconButton
          color="orange.400"
          style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
          variant="ghost"
          w={16}
          h={16}
          rounded="full"
          aria-label="Role Down"
          icon={<CaretCircleDoubleDown size={56} weight="fill" />}
        />
        {/* <Divider borderRadius="4px" borderColor="orange.400" variant="solid" /> */}
      </Stack>
    </Container>
  );
}
