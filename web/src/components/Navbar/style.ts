import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  transparent: {
    background: "transparent",
    boxShadow: "none",
    "& button": {
      color: "white",
    },
  },
  solid: {
    "& button": {
      color: "white",
    },
  },
  button: {
    font: "600 14px/30px Montserrat,sans-serif",
  },
}));
