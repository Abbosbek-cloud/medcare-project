import { Container, Stack } from "@mui/material";
import CustomPagination from "components/CustomPagination";
import MainLayout from "components/layout/main";
import { MainHeader } from "components/styled";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>Dori-darmonlar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Stack bgcolor="background.header" mb="24px">
          <Container>
            <MainHeader lineHeight="156px" my="40px">
              Dori-darmonlar
            </MainHeader>
          </Container>
        </Stack>
        <Container>
          <CustomPagination />
        </Container>
      </MainLayout>
    </>
  );
};

export default Page;
