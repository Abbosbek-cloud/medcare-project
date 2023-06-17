import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeaderComponent = (props) => {
  console.log(props);
  return (
    <Container>
      <Stack
        borderTop="1px solid hsla(0, 0%, 0%, .1)"
        py={2}
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
