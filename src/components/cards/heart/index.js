import { Box, Stack, styled } from "@mui/material";
import React from "react";
import Dot from "./Dot";

const HeartCart = () => {
  return (
    <Stack position="absolute" right="0" bottom="0" width="50%">
      <Stack position="relative" width="499px" height="479px">
        <Dot sx={{ position: "absolute", right: "50%", top: "50%" }} />
        <Dot sx={{ position: "absolute", left: "65%", top: "70%" }} />
        <Dot sx={{ position: "absolute", right: "70%", top: "60%" }} />
        <Dot sx={{ position: "absolute", right: "45%", top: "20%" }} />
        <Box component="img" src="/heart.png" width="499px" height="479px" />
        {/* width="36" height="36" position="absolute" left="10" */}
      </Stack>
    </Stack>
  );
};

export default HeartCart;
