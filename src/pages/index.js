import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "components/layout/main";
import HeaderComponent from "components/HeaderComponent";
import { doctors } from "data/doctors";
import Doctor1 from "components/cards/Doctor1";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { topics } from "data/topics";
import Doctor from "components/cards/Doctor";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { clinics } from "data/clinics";
import Clinics from "components/cards/Clinics";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Med Care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Grid container height="90vh" mb={3}>
          <Grid
            xs={12}
            sm={12}
            md={6}
            bgcolor="background.header"
            position="relative"
          >
            <Box
              component="img"
              src="/reception.png"
              width="70%"
              height="70%"
              sx={{
                objectFit: "cover",
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            />
          </Grid>
          <Grid xs={12} sm={12} md={6} display="flex" alignItems="center">
            <Stack width="60%" pl={2}>
              <Typography fontSize="32px" fontWeight="600">
                Biz haqimizda
              </Typography>
              <Typography
                mt={2}
                fontSize="19px"
                fontWeight="400"
                color="#454545"
              >
                Bizning xizmatimizning asosiy vazifasi bemorlarga yordam berish
                va tibbiy markaz, shifokor va muayyan tibbiy xizmatni tanlash
                jarayonini imkon qadar shaffof, qulay va tez qilishdir.
              </Typography>
              <Typography
                display="flex"
                alignItems="center"
                fontSize="16px"
                fontWeight="400"
                color="#000"
                sx={{ cursor: "pointer", my: 2 }}
              >
                <Link href="/aboutus">Batafsil</Link>
                <EastIcon color="#000" sx={{ ml: 2 }} />
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box
          component="img"
          src="/bgImage.png"
          width="100%"
          height="100vh"
          mb="60px"
        />
        <HeaderComponent name="Shifokorlarimiz" link="/topics">
          <Grid container spacing={2}>
            {doctors.slice(0, 2).map((item) => (
              <Grid item xs={12} sm={12} md={6}>
                <Doctor1 key={item.id} {...item} />
              </Grid>
            ))}
          </Grid>
          <Divider
            sx={{ border: "1px solid hsla(0, 0%, 0%, .1)", mt: "60px" }}
          />
        </HeaderComponent>
        <HeaderComponent name="Klinikalar" link="/clinics" bottom={true}>
          {clinics.map((clinic) => (
            <Clinics key={clinic.id} {...clinic} />
          ))}
        </HeaderComponent>
        <Box height="44px" />
        <HeaderComponent name="Maqolalar" link="/topics" none={true}>
          <Grid container mb="60px">
            {topics.slice(0, 3).map((item, index) => (
              <Grid item xs={12} sm={12} md={4}>
                <Doctor
                  key={item.id}
                  {...item}
                  isIllness={true}
                  isSelected={index === 1}
                />
              </Grid>
            ))}
          </Grid>
        </HeaderComponent>
        <Box component="img" src="/bgImage2.png" width="100%" height="100vh" />
        <Box height="100px" bgcolor="#fdfdfd" />
      </MainLayout>
    </>
  );
}
