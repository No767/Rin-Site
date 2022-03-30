import { Body } from './commands-components/body';
import React from "react";
import { Navbar } from "../components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../index.css";

export default function Commands() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FFFFFF",
      }
    },
    typography: {
      fontFamily: "Quicksand",
    },
  });

  return (
    <body>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body     />
      </ThemeProvider>
    </body>
  );
}
