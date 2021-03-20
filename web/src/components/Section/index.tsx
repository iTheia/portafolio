import { Box, BoxProps, Typography } from "@material-ui/core";
import { FC, CSSProperties } from "react";
import { alterFormat } from "../../util";

interface Props {
  size?: "small" | "big" | "medium";
  props?: BoxProps;
}
export const Section: FC<Props> = ({ size = "medium", props, children }) => {
  const height =
    size === "medium" ? "80vh" : size === "small" ? "30vh" : "100vh";

  return (
    <Box minHeight={height} {...props}>
      {children}
    </Box>
  );
};

interface TitleProps {
  primary: string;
  secundary: string;
  props?: CSSProperties;
}

export const TitleSection: FC<TitleProps> = ({ primary, secundary, props }) => (
  <Box marginBottom={3} style={props}>
    <Typography color='primary' style={{ fontSize: "12px" }} variant='h5'>
      {primary.toUpperCase()}
    </Typography>
    <Typography color='textPrimary' style={{ fontSize: "38px" }} variant='h3'>
      {alterFormat(secundary)}
    </Typography>
  </Box>
);
