import { Box, Icon } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import React from "react";

interface Props {
  github?: string;
  href: string;
  githubClass?: string;
  boxClass: string;
}
export const Links: React.FC<Props> = ({
  boxClass,
  href,
  github,
  githubClass,
}) => {
  const gitHub = github ? (
    <a
      href='http://'
      target='_blank'
      rel='noopener noreferrer'
      className={githubClass}
    >
      <Icon fontSize='large'>
        <img src='/GitHub-Mark-32px.png' width='100%' height='100%' alt='' />
      </Icon>
    </a>
  ) : null;
  const exitToApp = href ? (
    <a href='http://' target='_blank' rel='noopener noreferrer'>
      <ExitToApp fontSize='large' color='primary' />
    </a>
  ) : null;

  return (
    <Box className={boxClass}>
      {gitHub}
      {exitToApp}
    </Box>
  );
};
