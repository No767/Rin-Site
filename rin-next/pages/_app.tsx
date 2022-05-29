import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Quicksand",
        colorScheme: "dark",
        headings: { fontFamily: "Quicksand" },
        colors: {
          rinSite: [
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
          ],
        },
        primaryColor: "rinSite",
        primaryShade: 0,
        fontSizes: {
          xl: 30,
          lg: 25,
        },
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1500,
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
