import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import "../public/css/main.css";
// aliii 22e

// ok
function MyApp({ Component, pageProps }) {
  //test23
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
