import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
// import GAnalytics from '../components/Analytics/GAnalytics';
import { ScrollWhatsApp } from '../components/ScrollWhatsApp';
// import GTag from '../components/Analytics/GTag';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {/* <GTag /> */}
      <ScrollWhatsApp />
      {/* <GAnalytics /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
