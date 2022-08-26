import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFamily: "IranSanseDN",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "1.1rem",
    },
    h1: {
      fontSize: "45px",
    },
  },
  palette: {
    light: {
      light: "rgba(255, 255, 255, 0.7)",
      main: "rgba(255, 255, 255, 0.9)",
      contrastText: "rgba(255, 255, 255, 0.6)",
    },
    success: {
      main: "#009981",
    },
    divider: "rgba(255, 255, 255, 0.1)",
  },
});

export default theme;
