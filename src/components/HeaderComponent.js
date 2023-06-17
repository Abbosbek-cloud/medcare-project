import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeaderComponent = (props) => {
  return (
    <Container>
      <Stack
        borderTop={
          props.bottom ? "" : props.none ? "" : "1px solid hsla(0, 0%, 0%, .1)"
        }
        borderBottom={
          props.bottom ? "1px solid hsla(0, 0%, 0%, .1)" : props.none ? "" : ""
        }
        pt="24px"
        pb="30px"
        direction="row"
        justifyContent="space-between"
      >
        <Typography variant="h3" color="text.lightDark">
          {props.name}
        </Typography>
        <Typography variant="body2" color="success.main">
          <Link href={props.link}>Yana</Link>
        </Typography>
      </Stack>
      <Stack mb={2}>{props.children}</Stack>
    </Container>
  );
};

export default HeaderComponent;
