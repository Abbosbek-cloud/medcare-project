import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import HeartCart from "components/cards/heart";
import ClickIcon from "components/icons/ClickIcon";
import { useRouter } from "next/router";
import React from "react";

const MainSection = () => {
  const router = useRouter();
  return (
    <Stack position="relative">
      <Box bgcolor="background.header">
        <Container>
          <Stack height="100vh">
            <Stack
              height="50%"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize="100px" lineHeight="125px" fontWeight="700">
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
            <Stack height="50%" width="50%" p="80px">
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
