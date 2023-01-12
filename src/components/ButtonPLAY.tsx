import { Button } from '@chakra-ui/react';
import { YoutubeLogo } from 'phosphor-react';

export function ButtonPLAY() {
  return (
    <Button
      style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
      variant="outline"
      size={{ base: 'md', md: 'lg' }}
      colorScheme="orange"
      leftIcon={<YoutubeLogo size={22} weight="fill" />}
      zIndex={2}
    >
      Veja o Vídeo
    </Button>
  );
}
