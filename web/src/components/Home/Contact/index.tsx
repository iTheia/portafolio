import { Container, Grid } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";
import { contactTypes } from "./const";
import { ContactForm } from "./form";
import { ContactType } from "./type";

export const Contact = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item lg={5} md={5}>
          <TitleSection
            primary='texto de prueba'
            secundary='Talk Or Meet With Me'
            props={{ marginBottom: "50px" }}
          />
          {contactTypes.map((type) => (
            <ContactType key={type.text} {...type} />
          ))}
        </Grid>
        <Grid item lg={7} md={7}>
          <TitleSection
            primary='CONTACT US'
            secundary='Let Me Know Here Know Here'
            props={{ marginBottom: "50px" }}
          />
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
