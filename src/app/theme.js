// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#181818", // Set the primary color to #181818
    },
  },
  typography: {
    body1: {
      color: "black", // Custom color for body text
    },
  },
});

export default theme;
