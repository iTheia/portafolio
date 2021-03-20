import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { useStyles } from "./style";

export const Landing = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box display={{ xs: "none", lg: "block" }}>
        <img src='/splash.svg' alt='me' className={classes.image} />
      </Box>
      <Container
        style={{
          alignSelf: "center",
          justifySelf: "center",
          height: "100%",
        }}
      >
        <Grid
          container
          style={{ height: "100%" }}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} sm={12} md={6}>
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
                color='secondary'
                style={{ marginRight: 40 }}
              >
                Descargar CV
              </Button>
            </Box>
          </Grid>
          <Grid item display={{ xs: "none", md: "block", lg: "block" }} md={6}>
            <Box position='relative' width='100%'>
              <img src='/thinking.svg' alt='think' width='100%' />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
