import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { accordionTheme } from '../components/theme/Accordion';
import { dividerTheme } from '../components/theme/Divider';
import './styles.css';
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
      {/* <GAnalytics /> */}
      {/* <ScrollWhatsApp /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
