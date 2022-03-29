import Stack from "@mui/material/Stack";
import * as React from "react";
import { Navbar } from "../components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "../index.css";
import Link from "@mui/material/Link";

export default function Commands() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "Quicksand",
    },
  });

  return (
    <body>
      <ThemeProvider theme={darkTheme}>
        <Navbar />

        <Stack spacing={2} pt={5} className="items-center">
          <Typography variant="h3" className="text-white">
            Commands
          </Typography>
          <Typography variant="body" className="text-white">
            All of the commands can be found{" "}
            <Link
              href="https://docs.rinbot.live/docs/commands/rin-commands"
              underline="none"
              rel="noopener"
              color="secondary"
            >
              here
            </Link>
          </Typography>
          <Typography variant="body" className="text-white">
            Or you want a more up to date version, use either /rinhelp or /help.
            Both will provide the commands as well.
          </Typography>
        </Stack>
      </ThemeProvider>
    </body>
  );
}
