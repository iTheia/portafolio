import { makeStyles, Theme } from "@material-ui/core";

interface Props {
  side: boolean;
}
export const useStyles = makeStyles<Theme, Props>((theme) => ({
  cover: {
    height: "calc(100% - 6px)",
    width: "100%",
    backgroundColor: theme.palette.secondary.dark,
    opacity: 0.4,
    position: "absolute",
    zIndex: 9,
    top: 0,
    transition: "opacity 0.5s, visibility 0.5s",
    left: 0,
    "&:hover": {
      opacity: 0,
    },
  },
  imageContainer: {
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
  textContainer: {
    [theme.breakpoints.down("md")]: {
      order: 1,
    },
  },
  techList: {
    display: "flex",
    justifyContent: ({ side }) => (side ? "flex-end" : "flex-start"),
    marginTop: theme.spacing(2),
    alignItems: "center",
  },
  tech: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  name: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  container: {
    textAlign: ({ side }) => (side ? "end" : "start"),
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: theme.spacing(5),
      left: ({ side }) => (side ? null : theme.spacing(10)),
      zIndex: 99,
      width: "100%",
      right: ({ side }) => (side ? theme.spacing(10) : null),
    },
  },
  github: {
    marginRight: theme.spacing(2),
  },
}));
