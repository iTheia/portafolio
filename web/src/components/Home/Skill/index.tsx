import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";
import { skills } from "./const";
import { Skill } from "./Skill";

export const SkillsContainer = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TitleSection primary='habilidades' secundary='Que puedo ofrecer' />
          <Typography
            fontSize={18}
            marginBottom={2}
            fontWeight='bold'
            fontStyle='italic'
          >
            Todo proyecto comienza con un proposito
          </Typography>
          <Typography fontSize={18}>
            Desde que comence como desarrollador hace dos años he tenido claro
            que el proposito de un sistema es crear una solucion a un problema y
            me apasiona usar mis habilidades para colaborar a su solucion.
          </Typography>
          <Typography marginTop={2} fontSize={18}>
            Mientras algo exista como una idea es posible crear un sistema que
            lo haga realidad
          </Typography>
        </Grid>
        <Grid item md={6}>
          {skills.map((item) => (
            <Skill key={item.title} {...item} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
