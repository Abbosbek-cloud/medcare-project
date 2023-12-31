import Head from "next/head";
import MainLayout from "components/layout/main";
import HeaderComponent from "components/HeaderComponent";
import { doctors } from "data/doctors";
import Doctor1 from "components/cards/Doctor1";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { topics } from "data/topics";
import Doctor from "components/cards/Doctor";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { clinics } from "data/clinics";
import Clinics from "components/cards/Clinics";
import MainSection from "components/sections/main";
import useWindowSize from "components/hooks/useWindowSize";

export default function Home() {
  const windowWidth = useWindowSize();
  const isTablet = windowWidth > 900;
  return (
    <>
      <Head>
        <title>Med Care</title>
        <meta
          name="description"
          content="MedCare sog'ligingiz uchun qayg'uramiz"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <MainSection />
        <Grid container height="90vh" mb="60px">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            height={isTablet ? "auto" : "50vh"}
            bgcolor="background.header"
            position="relative"
          >
            <Box
              component="img"
              loading="lazy"
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
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            alignItems="center"
            minHeight={isTablet ? "" : "20vh"}
          >
            <Stack width={!isTablet ? "100%" : "60%"} pl={2}>
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
          loading="lazy"
          src="/bgImage.png"
          width="100%"
          height={isTablet ? "100vh" : "50vh"}
          mb="60px"
          sx={{ objectFit: "cover" }}
        />
        <HeaderComponent name="Shifokorlarimiz" link="/doctors">
          <Grid container spacing={2}>
            {doctors.slice(0, 2).map((item) => (
              <Grid key={item.id} item xs={12} sm={12} md={6}>
                <Doctor1 {...item} />
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
        <Box height="20px" />
        <HeaderComponent
          name="Maqolalar"
          linkName="Yana"
          link="/topics"
          none={true}
        >
          <Grid container mb="60px">
            {topics.slice(0, 3).map((item, index) => (
              <Grid key={item.id} item xs={12} sm={12} md={4}>
                <Doctor
                  {...item}
                  isIllness={true}
                  isselected={[1, 4, 7].includes(index) ? "true" : undefined}
                />
              </Grid>
            ))}
          </Grid>
        </HeaderComponent>
        <Box
          component="img"
          src="/bgImage2.png"
          loading="lazy"
          width="100%"
          height={isTablet ? "100vh" : "50vh"}
          sx={{ objectFit: "cover" }}
        />
        <Box height="100px" bgcolor="#fdfdfd" />
      </MainLayout>
    </>
  );
}
