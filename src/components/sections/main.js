import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import HeartCart from "components/cards/heart";
import Dot from "components/cards/heart/Dot";
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
        {/*  */}
        <Container>
          <Stack height={isPhone ? "100vh" : "auto"}>
            <Stack
              height="50%"
              direction={isPhone ? "row" : "column"}
              alignItems="center"
              justifyContent={isPhone ? "space-between" : "space-evenly"}
            >
              <Typography
                fontSize={isPhone ? "8.25rem" : "3rem"}
                lineHeight={isPhone ? "9.813rem" : "3.5rem"}
                fontWeight="500"
                mb={isPhone ? "30px" : ""}
                my={!isPhone ? 2 : ""}
                textAlign={!isPhone ? "center" : ""}
                letterSpacing={isPhone ? "3px" : 0}
              >
                Diagnostika {isPhone && <br />} Ekspert Tizimi
              </Typography>

              <Button
                sx={{ padding: "19px 50px", borderRadius: "13px" }}
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

            {!isPhone && (
              <Stack position="relative" width="100%">
                <Dot sx={{ position: "absolute", right: "50%", top: "50%" }} />
                <Dot sx={{ position: "absolute", left: "65%", top: "70%" }} />
                <Dot sx={{ position: "absolute", right: "70%", top: "60%" }} />
                <Dot sx={{ position: "absolute", right: "45%", top: "20%" }} />
                <Box
                  component="img"
                  loading="lazy"
                  src="/heart.png"
                  width="100%"
                />
              </Stack>
            )}
            <Stack
              height="50%"
              width={isPhone ? "50%" : "100%"}
              p={isPhone ? "80px" : ""}
              flexDirection="column"
              alignItems="center"
              justifyContent={isPhone ? "space-between" : "center"}
            >
              <Typography
                fontSize="25px"
                lineHeight="32px"
                textAlign={!isPhone ? "center" : ""}
                mb={!isPhone ? 2 : 0}
              >
                Bu jarayonlar, tibbiyot, dori-darmonlar, amaliyotlar yoki
                alternativ tadqiqot va davolash usullari orqali amalga
                oshirilishi mumkin.
              </Typography>
              {isPhone && <Box component="div" height="40px" />}
            </Stack>
          </Stack>
        </Container>
      </Box>
      {isPhone && <HeartCart />}
      <Box
        height={isPhone ? "125px" : "70px"}
        mt="20px"
        bgcolor="success.main"
        mb="60px"
      />
    </Stack>
  );
};

export default MainSection;
