import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { accordionTheme } from '../components/Accordion';
import { dividerTheme } from '../components/Divider';
// import { ScrollWhatsApp } from '../components/ScrollWhatsApp';
// import GAnalytics from '../components/Analytics/GAnalytics';
// import GTag from '../components/Analytics/GTag';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Accordion: accordionTheme,
    Divider: dividerTheme,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {/* <GTag /> */}
      {/* <ScrollWhatsApp /> */}
      {/* <GAnalytics /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
