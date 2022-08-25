import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import "../public/css/main.css";
// aliii
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
