import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="center"
          gap={1}
          py={3}
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Box component="img" src="/svg.svg" />
          <Typography variant="logoPrint" fontWeight="500" color="success.main">
            MedCare
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "calc(100vh - 81px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography textAlign="center" variant="h4">
            Kasallik turini aniqlash uchun <br /> kasallik alomatini tanlang
          </Typography>
        </Stack>
        <Stack p={3}>
          <Stack borderTop="1px solid hsla(0, 0%, 0%, .1)" pt={2}>
            <Button variant="contained" color="success">
              Keyingisi
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Page;
