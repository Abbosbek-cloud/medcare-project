import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIllness, toggleSelected } from "store/search.slice";
import { inlless } from "data/illness";
import { CircleTag } from "components/styled";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { sick, selected } = useSelector((state) => state.search);
  const [sickness, setSickness] = React.useState(null);

  React.useEffect(() => {
    dispatch(setIllness(inlless));
    setSickness(inlless[0].id);
  }, []);

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
                  value={sickness}
                  name="sick"
                  sx={{ minWidth: "100%" }}
                  label={!sickness && "Quyida kasallik alomatlarini tanlangge"}
                  onChange={(e) => {
                    let selectedData = inlless.find(
                      (item) => item.id === e.target.value
                    );
                    dispatch(toggleSelected(selectedData));
                    setSickness(selectedData);
                  }}
                  fullWidth
                >
                  {sick?.map((item) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Stack p={3} direction="row" spacing={1}>
            {selected.map((item) => (
              <Chip
                label={item.name}
                onDelete={() => dispatch(toggleSelected(item))}
              />
            ))}
          </Stack>
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
