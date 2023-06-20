import React from "react";
import { Drawer, Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const MenuDrawer = (props) => {
  const router = useRouter();
  const list = (anchor) => (
    <Box
      sx={{ width: 300, p: 2 }}
      role="presentation"
      onClick={() => props.toggleDrawer(false)}
      onKeyDown={() => props.toggleDrawer(false)}
    >
      {/* drawer components come here */}
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        gap={1}
        sx={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        <Box component="img" src="/svg.svg" />
        <Typography variant="logoPrint" fontWeight="500" color="success.main">
          MedCare
        </Typography>
      </Stack>
    </Box>
  );
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  );
};

export default MenuDrawer;
