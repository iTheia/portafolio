import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { useStyles } from "./style";
import Image from "next/image";

export const Landing = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <img
        src='/splash.svg'
        alt='me'
        width='64'
        height='64'
        className={classes.image}
      />
      <Container style={{ height: "100%" }}>
        <Grid
          container
          style={{ height: "100%" }}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={6} md={6}>
            <Typography
              variant='h3'
              fontWeight='bold'
              className={classes.mainText}
            >
              Hey there!
              <br />
              I'm Martin Solonick Independent{" "}
              <span className={classes.focus}>Frelencer</span>
            </Typography>
            <Typography className={classes.leyend}>
              I CREATE THOUSAND OFF WEBSITE
            </Typography>
            <Box display='flex' mt={4}>
              <Button
                variant='contained'
                size='large'
                style={{ marginRight: 40 }}
              >
                Descargar CV
              </Button>
              <Button variant='outlined' size='large'>
                Contactar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box position='relative'>asd</Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
