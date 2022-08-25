import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import "../public/css/main.css";
// aliii 22e

// ok
//ok2
function MyApp({ Component, pageProps }) {
  //test23444
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
