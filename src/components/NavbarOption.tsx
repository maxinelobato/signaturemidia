import { Box, Flex, Container, Image, Center, Text } from '@chakra-ui/react';
import '@fontsource/quicksand';
import {
  motion,
  LazyMotion,
  domAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect } from 'react';

export function NavbarOption() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0]);
  useEffect(() => {
    console.log('scrollYProgress changed');
  }, [scrollYProgress]);

  return (
    <>
      <Box
        w="full"
        position="fixed"
        zIndex={3}
        backdropFilter="auto"
        backdropBlur="1rem"
        bgColor="blackAlpha.400"
        boxShadow="md"
      >
        <LazyMotion features={domAnimation}>
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              borderRadius: '8px',
              scaleX,
              background: '#dd6b20',
            }}
          />
        </LazyMotion>
        {Array.from({ length: 100 }).map((_, i) => (
          <Box key={i} />
        ))}
        <Container maxW="7xl" pt={2}>
          <Flex flex={1} h={16} alignItems="center" justifyContent="center">
            <Flex alignItems="center">
              <Image
                height={{ base: 32, md: 36 }}
                width={{ base: 32, md: 36 }}
                src="/signaturemidia.svg"
                alt="Signature Logo"
              />
            </Flex>
          </Flex>
          <Center mt={-3}>
            <Text fontFamily="Quicksand" fontSize="sm" color="whiteAlpha.900">
              A sua assinatura no digital
            </Text>
          </Center>
        </Container>
      </Box>
    </>
  );
}
