import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Showcase } from "./components/showcase";
import { Body } from "./components/body";
import "./index.css";
import logo from "./images/Rin Logo V4 (GitHub).png";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Quicksand",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ededed",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Showcase logo={logo} theme={theme} />
        <Body />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
