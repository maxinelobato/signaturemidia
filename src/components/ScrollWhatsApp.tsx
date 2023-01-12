import { Icon, IconButton, Link, Stack } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function ScrollWhatsApp() {
  return (
    <Stack
      position="fixed"
      zIndex={999}
      bottom="30px"
      right="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        style={{ textDecoration: 'none' }}
        href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
        isExternal
      >
        <IconButton
          color="whiteAlpha.900"
          aria-label="behavior"
          bgColor="green.500"
          variant="solid"
          w={14}
          h={14}
          shadow="base"
          _hover={{
            bgColor: 'green.600',
            transform: 'scale(1.1)',
          }}
          isRound
        >
          <Icon as={WhatsappLogo} w={8} h={8} />
        </IconButton>
      </Link>
    </Stack>
  );
}
