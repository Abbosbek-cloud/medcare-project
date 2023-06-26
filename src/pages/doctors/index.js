import { Container, Grid, Stack } from "@mui/material";
import CustomPagination from "components/CustomPagination";
import DrawerDoctor from "components/cards/DrawerDoctor";
import MainLayout from "components/layout/main";
import NavItem from "components/navItem";
import { MainHeader } from "components/styled";
import { doctors } from "data/doctors";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query?.search?.toUpperCase() || "Shifokorlar"}</title>
        <meta name="robots" content="all" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Stack bgcolor="background.header" mb="24px">
          <Container>
            <MainHeader lineHeight="156px" my="40px">
              Shifokorlar
            </MainHeader>
          </Container>
        </Stack>
        <Container>
          <Stack
            pb="15px"
            mb="30px"
            overflow="auto"
            width="100%"
            direction="row"
            display="flex"
            sx={{
              /* width */
              "&::-webkit-scrollbar": {
                width: "2px",
              },

              /* Track */
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },

              /* Handle */
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
              },

              /* Handle on hover */
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },

              "@media(max-width: 900px)": {
                "&::-webkit-scrollbar": {
                  width: "initial",
                },

                /* Track */
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                },

                /* Handle */
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                },

                /* Handle on hover */
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              },
            }}
          >
            <NavItem
              link="/doctors"
              name="Barchasi"
              isActive={router.pathname == "/doctors" && !router.query.search}
              isLast={false}
            />
            <NavItem
              link="/doctors?search=chiropraktor"
              name="Chiropraktor"
              isActive={router.query.search == "chiropraktor"}
              isLast={false}
            />
            <NavItem
              link="/doctors?search=stomatologTerapevt"
              name="Stomatolog-terapevt"
              isActive={router.query.search == "stomatologTerapevt"}
              isLast={false}
            />
            <NavItem
              link="/doctors?search=ginekolog"
              name="Ginekolog"
              isActive={router.query.search == "ginekolog"}
              isLast={false}
            />
            <NavItem
              link="/doctors?search=jarroh"
              name="Jarroh"
              isActive={router.query.search == "jarroh"}
              isLast={false}
            />
            <NavItem
              link="/doctors?search=kardiolog"
              name="Kardiolog"
              isActive={router.query.search == "kardiolog"}
              isLast={true}
            />
          </Stack>
          <Grid container>
            {doctors.map((item, index) => (
              <Grid item key={index} xs={12} sm={12} md={4} mb="30px">
                <DrawerDoctor
                  {...item}
                  isDoctorPage={true}
                  isselected={[1, 4, 7].includes(index) ? "true" : undefined}
                />
              </Grid>
            ))}
          </Grid>
          <CustomPagination />
        </Container>
      </MainLayout>
    </>
  );
};

export default Page;
