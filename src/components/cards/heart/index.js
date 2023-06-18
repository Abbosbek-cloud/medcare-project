import { Box, Stack } from "@mui/material";
import React from "react";

const HeartCart = () => {
  return (
    <Stack
      position="absolute"
      right="0"
      bottom="0"
      width="60%"
      sx={{ backgroundImage: "url(/heart.png)" }}
    >
      <Stack position="relative">
        lorem
        {/* <Box component="img" src="/heart.png" width="499px" height="479px" /> */}
      </Stack>
    </Stack>
  );
};

export default HeartCart;
