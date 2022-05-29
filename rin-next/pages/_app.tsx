import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NextSeo } from "next-seo";

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
          xl: 50,
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
      <NextSeo
        title="Rin"
        description="Rin - A lighting fast Discord bot focused on obtaining data from third-party services. Includes support for MangaDex, Twitter, YouTube, Reddit, DeviantArt, and more."
        canonical="https://rinbot.live"
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            property: "google",
            content: "notranslate",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://rinbot.live",
          title: "Rin",
          description:
            "Rin - A lighting fast Discord bot focused on obtaining data from third-party services. Includes support for MangaDex, Twitter, YouTube, Reddit, DeviantArt, and more.",
        }}
      />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
