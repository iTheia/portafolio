import { Container } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";
import { mainProjects } from "./const";
import { MainProject } from "./MainProject";
import { useStyles } from "./style";

export const Projects = () => {
  const classes = useStyles();
  return (
    <Container>
      <TitleSection
        primary='todos los proyectos'
        secundary='Proyectos que he realizado'
      />
      {mainProjects.map((project, index) => (
        <MainProject project={project} index={index} key={project.name} />
      ))}
      <TitleSection
        primary='mas proyectos'
        secundary='algunos otros proyectos'
      />
    </Container>
  );
};
