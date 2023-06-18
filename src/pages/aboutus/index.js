import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import MainLayout from "components/layout/main";
import { MainHeader } from "components/styled";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>Biz haqimizda</title>
        <meta name="robots" content="all" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Stack bgcolor="background.header" mb="24px">
          <Container>
            <MainHeader lineHeight="156px" my="40px">
              Biz haqimizda
            </MainHeader>
          </Container>
        </Stack>
        <Container>
          <Grid container spacing="24px">
            <Grid item xs={12} sm={12} md={6}>
              <Grid container height="100%">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  height="50%"
                  display="flex"
                  alignItems="center"
                >
                  <Stack>
                    <Typography
                      fontSize="36px"
                      fontWeight="500"
                      lineHeight="45px"
                      mb="32px"
                    >
                      Bizning tamoyilimiz - barqaror rivojlanishdir
                    </Typography>
                    <Typography
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="160%"
                    >
                      Med24.uz – bemor va klinika o‘rtasida ularning
                      salomatligini samarali boshqarish uchun aloqani
                      ta’minlovchi xizmatdir. Bizning xizmatimizning asosiy
                      vazifasi - bemor va tibbiyot o'rtasidagi o'zaro aloqa
                      sifatini yaxshilash, uning barcha bosqichlarida tibbiy
                      yordam olish jarayonini soddalashtirish va
                      tezlashtirishdir.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} height="50%">
                  <Box
                    component="img"
                    src="/medic.png"
                    width="100%"
                    height="100%"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component="img"
                src="/rightBarImg.png"
                width="100%"
                height="100%"
              />
            </Grid>
          </Grid>
        </Container>
      </MainLayout>
    </>
  );
};

export default Page;
