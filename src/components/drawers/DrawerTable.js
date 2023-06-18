import { Stack, Typography } from "@mui/material";
import React from "react";

const DrawerTable = (props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      borderTop="1px solid hsla(0, 0%, 0%, .1)"
      borderBottom="1px solid hsla(0, 0%, 0%, .1)"
      py="10px"
    >
      <Typography
        fontStyle="normal"
        fontWeight="400"
        fontSize="14px"
        lineHeight="20px"
      >
        {props.name}
      </Typography>
      <Typography
        fontStyle="normal"
        fontWeight="400"
        fontSize="14px"
        lineHeight="20px"
        color="success.main"
      >
        {props.value}
      </Typography>
    </Stack>
  );
};

export default DrawerTable;
