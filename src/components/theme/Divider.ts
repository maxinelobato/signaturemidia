import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const brandPrimary = defineStyle({
  borderWidth: '3px',
  borderStyle: 'dashed',
  borderColor: 'orange.400',
});

const xl = defineStyle({
  borderWidth: '10px',
  borderStyle: 'solid',
  borderRadius: 20,
});

const thick = defineStyle({
  borderWidth: '5px', // change the appearance of the border
  borderStyle: 'solid',
  borderRadius: 10, // set border radius to 10
  borderColor: 'orange.400',
});

export const dividerTheme = defineStyleConfig({
  sizes: {
    xl: xl,
  },
  variants: {
    brand: brandPrimary,
    thick: thick,
  },
});
