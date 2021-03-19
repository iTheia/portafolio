import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";
import facade from "./facade";
import { links } from "./const";
export const Navbar = () => {
  const classes = useStyles();
  const navBackGround = facade();
  return (
    <AppBar position='fixed' className={classes[navBackGround]}>
      <Container className={classes.container}>
        <Typography variant='h6' className={classes.title}>
          News
        </Typography>
        {links.map((link) => (
          <Button key={link.txt} className={classes.button} color='inherit'>
            {link.txt}
          </Button>
        ))}
      </Container>
    </AppBar>
  );
};
