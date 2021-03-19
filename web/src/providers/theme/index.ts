import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#84dbe5",
      main: "#0db4c7",
      dark: "#0eb3c7",
    },
    secondary: {
      main: "#41b5ff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
    },

    text: {
      secondary: "#677294",
      primary: "#040c2c",
    },
  },
});
