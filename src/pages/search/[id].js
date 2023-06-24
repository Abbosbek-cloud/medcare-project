import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Head from "next/head";

const SomePage = () => {
  return (
    <>
      <Head>
        <title>Qidiruvlar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <Grid container justifyContent="center" marginTop={2}>
            <Grid item md={4}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">
                  Quyida kasallik alomatlarini tanlang
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Quyida kasallik alomatlarini tanlangge"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Bosh og'rig'i</MenuItem>
                  <MenuItem value={20}>Isitma</MenuItem>
                  <MenuItem value={30}>Hansirash</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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

export default SomePage;