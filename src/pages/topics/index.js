import { Container, Grid, Stack } from "@mui/material";
import CustomPagination from "components/CustomPagination";
import DrawerDoctor from "components/cards/DrawerDoctor";
import MainLayout from "components/layout/main";
import { MainHeader } from "components/styled";
import { topics } from "data/topics";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>Maqolalar</title>
        <meta
          name="description"
          content="MedCare loyihasining maqolalar sahifasi"
        />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Stack bgcolor="background.header" mb="24px">
          <Container>
            <MainHeader lineHeight="156px" my="40px">
              Maqolalar
            </MainHeader>
          </Container>
        </Stack>
        <Container>
          <Grid container>
            {topics.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} lg={4} mb="30px">
                <DrawerDoctor
                  {...item}
                  isIllness={true}
                  isselected={[1, 4, 7].includes(index) ? "true" : undefined}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container>
          <CustomPagination />
        </Container>
      </MainLayout>
    </>
  );
};

export default Page;
