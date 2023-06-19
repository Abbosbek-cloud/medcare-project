import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import HeartCart from "components/cards/heart";
import useWindowSize from "components/hooks/useWindowSize";
import ClickIcon from "components/icons/ClickIcon";
import { useRouter } from "next/router";
import React from "react";

const MainSection = () => {
  const router = useRouter();
  const width = useWindowSize();
  let isPhone = width > 900;
  return (
    <Stack position="relative">
      <Box bgcolor="background.header">
        <Container>
          <Stack height={isPhone ? "100vh" : "50vh"}>
            <Stack
              height="50%"
              direction={isPhone ? "row" : "column"}
              alignItems="center"
              justifyContent={isPhone ? "space-between" : "space-evenly"}
            >
              <Typography
                fontSize={isPhone ? "6.25rem" : "3rem"}
                lineHeight={isPhone ? "7.813rem" : "3.5rem"}
                fontWeight="700"
                mb={isPhone ? "30px" : ""}
              >
                Diagnostika <br /> Ekspert Tizimi
              </Typography>

              <Button
                sx={{ padding: "19px 50px" }}
                variant="contained"
                color="success"
                endIcon={<ClickIcon />}
                onClick={() => router.push("/search")}
              >
                <Typography fontSize="16px" lineHeight="21px" fontWeight="400">
                  Diagnostikani boshlash
                </Typography>
              </Button>
            </Stack>
            <Stack
              height="50%"
              width={isPhone ? "50%" : "100%"}
              p={isPhone ? "80px" : ""}
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body1">
                Bu jarayonlar, tibbiyot, dori-darmonlar, amaliyotlar yoki
                alternativ tadqiqot va davolash usullari orqali amalga
                oshirilishi mumkin.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <HeartCart />
      <Box height="125px" mt="20px" bgcolor="success.main" mb="60px" />
    </Stack>
  );
};

export default MainSection;
