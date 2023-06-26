import React from "react";
import { Drawer, Box, Stack, Typography, Container } from "@mui/material";
import { useRouter } from "next/router";
import CancelIcon from "components/icons/CancelIcon";
import NavItem from "components/navItem";
import { IconBox } from "components/layout/main";

import FaceBookIcon from "components/icons/FaceBookIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import TelegramIcon from "components/icons/TelegramIcon";

const MenuDrawer = (props) => {
  const router = useRouter();
  const list = (anchor) => (
    <Box
      sx={{
        width: 300,
        p: 2,
        backgroundColor: "background.header",
        height: "100%",
      }}
      role="presentation"
      onKeyDown={() => props.toggleDrawer(false)}
    >
      {/* drawer components come here */}
      <Stack
        px={0.1}
        pb={4}
        direction="column"
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Stack
          px={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display={"flex"}
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Box component="img" loading="lazy" src="/svg.svg" />
            <Typography
              variant="logoPrint"
              fontWeight="300"
              fontSize={22}
              color="success.main"
            >
              MedCare
            </Typography>
          </Box>
          <CancelIcon onClick={() => props.toggleDrawer(false)} />
        </Stack>
        <Stack direction="column" alignItems={"center"} gap={3}>
          <NavItem
            link="/aboutus"
            name="Biz haqimizda"
            isActive={router.pathname.startsWith("/aboutus")}
            isLast={true}
          />
          <NavItem
            link="/doctors"
            name="Shifokorlar"
            isActive={router.pathname.startsWith("/doctors")}
            isLast={true}
          />
          <NavItem
            link="/clinics"
            name="Klinikalar"
            isActive={router.pathname.startsWith("/clinics")}
            isLast={true}
          />
          <NavItem
            link="/pills"
            name="Dori-darmonlar"
            isActive={router.pathname.startsWith("/pills")}
            isLast={true}
          />
          <NavItem
            link="/topics"
            name="Maqolalar"
            isActive={router.pathname.startsWith("/topics")}
            isLast={true}
          />
          <NavItem
            link="/contacts"
            name="Kontaktlar"
            isActive={router.pathname.startsWith("/contacts")}
            isLast={true}
          />
        </Stack>
        <Stack direction="row" justifyContent={"center"} gap={2}>
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
      </Stack>
    </Box>
  );
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  );
};

export default MenuDrawer;
