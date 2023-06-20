import { Box, Stack } from "@mui/material";
import HeartEllipse from "components/icons/HeartEllipse";
import React from "react";

const HeartCart = () => {
  return (
    <Stack
      position="absolute"
      right="0"
      bottom="0"
      width="50%"
      background="blue"
    >
      <Stack background="aqua">
        lorem
        <HeartEllipse />
        <Box component="img" src="/heart.png" width="499px" height="479px" />
        {/* width="36" height="36" position="absolute" left="10" */}
      </Stack>
    </Stack>
  );
};

export default HeartCart;
