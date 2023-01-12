import { Button, Link } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function ButtonWTP() {
  return (
    <Button
      as={Link}
      size={{ base: 'md', md: 'lg' }}
      bgColor="orange.500"
      color="whiteAlpha.900"
      style={{ textDecoration: 'none' }}
      _hover={{
        bgColor: 'whiteAlpha.900',
        color: 'blackAlpha.900',
        transition: '0.4s',
        transform: 'scale(1.1)',
      }}
      leftIcon={<WhatsappLogo size={22} weight="fill" />}
      isExternal
      href="https://api.whatsapp.com/send?phone=5590000000000&text=Ol%C3%A1%2C%20Signature%20Mídia!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
    >
      Fale Conosco
    </Button>
  );
}
