import React from "react";
import {
  AppBar,
  Box,
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
    <AppBar
      position='fixed'
      color='transparent'
      className={classes[navBackGround]}
    >
      <Container className={classes.container}>
        <Typography variant='h6' className={classes.title}>
          News
        </Typography>
        <Box display={{ md: "block", lg: "block", xs: "none" }}>
          {links.map((link) => (
            <Button key={link.txt} className={classes.button} color='inherit'>
              {link.txt}
            </Button>
          ))}
        </Box>
        <Box display={{ md: "none", lg: "none", xs: "block" }}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='secondary'
            aria-label='menu'
          >
            <MenuIcon color='primary' fontSize='large' />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
