import { theme } from "../Theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'CabinetGrotesk-Regular';
  src: url('/fonts/CabinetGrotesk-Regular.woff2') format('woff2'),
       url('/fonts/CabinetGrotesk-Regular.woff') format('woff'),
       url('/fonts/CabinetGrotesk-Regular.ttf') format('truetype');
} 
@font-face {
font-family: 'CabinetGrotesk-Bold';
  src: url('/fonts/CabinetGrotesk-Bold.woff2') format('woff2'),
       url('/fonts/CabinetGrotesk-Bold.woff') format('woff'),
       url('/fonts/CabinetGrotesk-Bold.ttf') format('truetype');
} 

@font-face {
  font-family: 'RedHatDisplay-Regular';
  src: url('.fonts/RedHatDisplay-Regular.woff2') format('woff2'),
       url('/fonts/RedHatDisplay-Regular.woff') format('woff'),
       url('/fonts/RedHatDisplay-Regular.ttf') format('truetype');
} 

@font-face {
  font-family: 'RedHatDisplay-Bold';
  src: url('.fonts/RedHatDisplay-Bold.woff2') format('woff2'),
       url('/fonts/RedHatDisplay-Bold.woff') format('woff'),
       url('/fonts/RedHatDisplay-Bold.ttf') format('truetype');
} 



body,html {
  max-width: 100vw;
  background-color: ${(props) => props.theme.grayBG};
  color: ${(props) => props.text};
}
html{
  height: 100%;
  width: 100%;
  font-family: 'CabinetGrotesk-Regular'
  
  
  
} body {
  height: 100% ;
  width: 100vw;
  margin: 0px;
  max-width: 100%;
  overflow-x: hidden;
}
`;

const PageWrapper = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

PageWrapper.getInitialProps = async ({ Component, ctx }) => {
  const { res } = ctx;

  if (res) {
    res.setHeader(
      "Cache-Control",
      "public, max-age=30, stale-while-revalidate=60, must-revalidate"
    );
  }
  return {};
};

export default PageWrapper;
