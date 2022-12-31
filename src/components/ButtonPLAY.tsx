import { Button } from '@chakra-ui/react';
import { YoutubeLogo } from 'phosphor-react';

export function ButtonPLAY() {
  return (
    <Button
      style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
      variant="outline"
      size="lg"
      colorScheme="orange"
      leftIcon={<YoutubeLogo size={32} weight="fill" />}
      zIndex={2}
    >
      Veja o Vídeo
    </Button>
  );
}
