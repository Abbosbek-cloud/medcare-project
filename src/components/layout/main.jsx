import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import FaceBookIcon from "components/icons/FaceBookIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import TelegramIcon from "components/icons/TelegramIcon";
import NavItem from "components/navItem";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MainLayout = (props) => {
  const router = useRouter();
  return (
    <>
      <Stack py={2} sx={{ backgroundColor: "background.header" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            gap={1}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Box component="img" src="/svg.svg" />
            <Typography
              variant="logoPrint"
              fontWeight="500"
              color="success.main"
            >
              MedCare
            </Typography>
          </Stack>
          <Stack direction="row">
            <NavItem
              link="/aboutus"
              name="Biz haqimizda"
              isActive={router.pathname.startsWith("/aboutus")}
              isLast={false}
            />
            <NavItem
              link="/doctors"
              name="Shifokorlar"
              isActive={router.pathname.startsWith("/doctors")}
              isLast={false}
            />
            <NavItem
              link="/clinics"
              name="Klinikalar"
              isActive={router.pathname.startsWith("/clinics")}
              isLast={false}
            />
            <NavItem
              link="/pills"
              name="Dori-darmonlar"
              isActive={router.pathname.startsWith("/pills")}
              isLast={false}
            />
            <NavItem
              link="/topics"
              name="Maqolalar"
              isActive={router.pathname.startsWith("/topics")}
              isLast={false}
            />
            <NavItem
              link="/contacts"
              name="Kontaktlar"
              isActive={router.pathname.startsWith("/contacts")}
              isLast={true}
            />
          </Stack>
        </Container>
      </Stack>
      <Box sx={{ minHeight: "25vh", mb: 5 }}>{props.children}</Box>
      <Container>
        <Grid container minHeight="300px">
          <Grid item xs={12} sm={12} md={6}>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              gap="10px"
              sx={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              <Box component="img" src="/svg.svg" />
              <Typography
                variant="logoPrint"
                fontWeight="500"
                color="success.main"
              >
                MedCare
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Link href="/aboutus">
              <Typography
                variant="body2"
                fontWeight="500"
                color="text.lightDark"
                mb={3}
              >
                Biz haqimizda
              </Typography>
            </Link>
            <Link href="/doctors">
              <Typography
                variant="body2"
                fontWeight="500"
                color="text.lightDark"
                mb={3}
              >
                Shifokorlar
              </Typography>
            </Link>
            <Link href="/clinics">
              <Typography
                variant="body2"
                fontWeight="500"
                color="text.lightDark"
                mb={3}
              >
                Klinikalar
              </Typography>
            </Link>
            <Link href="/pills">
              <Typography
                variant="body2"
                fontWeight="500"
                color="text.lightDark"
                mb={3}
              >
                Dori-darmonlar
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Stack direction="row" justifyContent="end" gap={2}>
              <IconBox>
                <FaceBookIcon />
              </IconBox>
              <IconBox>
                <InstagramIcon />
              </IconBox>
              <IconBox>
                <TelegramIcon />
              </IconBox>
            </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} py={2}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" justifyContent="start" gap={3}>
                <Typography fontSize="16px" fontWeight="400">
                  <a href="tel:+998775558587">+998 (77) 555-85-87</a>
                </Typography>
                <Typography fontSize="16px" fontWeight="400">
                  <a href="mailto:medcare@info.com">medcare@info.com</a>
                </Typography>
              </Stack>
              <Typography fontSize="16px" fontWeight="400">
                Copyright 2023. MedCare
              </Typography>
              <Typography fontSize="16px" fontWeight="400">
                <Link href="/security">Maxfiylik siyosati</Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainLayout;

export const IconBox = styled(Box)(({}) => ({
  width: "36px",
  height: "36px",
  borderRadius: "10px",
  border: "1px solid hsla(0, 0%, 0%, .1)",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
