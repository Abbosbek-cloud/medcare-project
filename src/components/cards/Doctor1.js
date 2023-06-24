import { Box, Stack, Typography } from "@mui/material";
import useWindowSize from "components/hooks/useWindowSize";
import { Doctor1Container } from "components/styled";
import React from "react";

const Doctor1 = (props) => {
  let isTablet = useWindowSize() > 900;
  return (
    <Doctor1Container>
      <Stack direction="row" justifyContent="space-between">
        <Stack
          direction="column"
          justifyContent={isTablet ? "space-around" : "start"}
        >
          <Typography color="black.main" fontSize="27px" fontWeight="500">
            {props.name}
          </Typography>
          <Typography
            color="text.light"
            variant="body1"
            fontWeight="500"
            lineHeight="120%"
          >
            {props.kasbi}
          </Typography>
        </Stack>
        <Box component="img" src={props.image} className="imageBox" />
      </Stack>

      <Typography
        width={isTablet ? "80%" : ""}
        fontSize="21px"
        fontWeight="700"
        lineHeight="125%"
      >
        {props.about}
      </Typography>

      <Typography
        width={isTablet ? "80%" : ""}
        variant="h6"
        fontWeight="400"
        lineHeight="150%"
      >
        {props.citate}
      </Typography>
    </Doctor1Container>
  );
};

export default Doctor1;
