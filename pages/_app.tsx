import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/assets/styles/theme';
import GlobalStyle from '@/assets/styles/globalStyle';
import wrapper from '@/store/configureStore';
import { NextPage } from 'next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
