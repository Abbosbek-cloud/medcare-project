import { Box, Stack, styled } from "@mui/material";
import React from "react";
import Dot from "./Dot";

const HeartCart = () => {
  return (
    <Stack
      position="absolute"
      right="100px"
      bottom="100px"
      width="40%"
      className="heart-box"
    >
      <Stack position="relative" width="499px" height="479px">
        <Dot sx={{ position: "absolute", right: "45%", top: "52%" }} />
        <Dot sx={{ position: "absolute", left: "65%", top: "70%" }} />
        <Dot sx={{ position: "absolute", right: "68%", top: "60%" }} />
        <Dot sx={{ position: "absolute", right: "42%", top: "15%" }} />
        <Box
          component="img"
          loading="lazy"
          src="/heart.png"
          width="499px"
          height="479px"
        />
        {/* width="36" height="36" position="absolute" left="10" */}
      </Stack>
    </Stack>
  );
};

export default HeartCart;
