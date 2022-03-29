import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Showcase } from './components/showcase';
import { Body } from './components/body';
import "./index.css";
import logo from "./images/Rin Logo V4 (GitHub).png";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    mode: 'dark'
  },
  typography: {
    fontFamily: "Quicksand",
  }
});

function widthChecker() {
  const theme3 = useTheme();
  const matches = useMediaQuery(theme3.breakpoints.down("sm"));
  const smallMatches = useMediaQuery(theme3.breakpoints.down("xs"));
  const medMatches = useMediaQuery(theme3.breakpoints.down("md"));
  if (matches == true || smallMatches == true || medMatches == true) {
    return "column";
  } else {
    return "row";
  }
}


function App() {


  return (
    
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <Navbar     />
      <Showcase   logo={logo} theme={theme} widthChecker={widthChecker}  />
      <Body     />
      <Footer     />
      </ThemeProvider>
    </div>
    
  );
}

export default App;
