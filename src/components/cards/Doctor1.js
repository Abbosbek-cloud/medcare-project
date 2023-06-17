import { Box, Stack, Typography } from "@mui/material";
import { Doctor1Container } from "components/styled";
import React from "react";

const Doctor1 = (props) => {
  return (
    <Doctor1Container>
      <Box component="img" src={props.image} className="imageBox" />
      <Stack direction="column">
        <Typography
          widthsx={{ width: "calc(100% - 125px)" }}
          color="black.main"
          fontSize="27px"
          fontWeight="500"
        >
          {props.name}
        </Typography>
        <Typography
          widthsx={{ width: "calc(100% - 125px)" }}
          color="text.light"
          variant="body1"
          fontWeight="500"
        >
          {props.kasbi}
        </Typography>
      </Stack>
      <Typography
        sx={{ width: "calc(100% - 125px)" }}
        fontSize="21px"
        fontWeight="700"
        lineHeight="125%"
      >
        {props.about}
      </Typography>
      <Typography
        sx={{ width: "calc(100% - 125px)" }}
        variant="h6"
        fontWeight="400"
      >
        {props.citate}
      </Typography>
    </Doctor1Container>
  );
};

export default Doctor1;
