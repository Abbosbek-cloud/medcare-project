import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import FaceBookIcon from "components/icons/FaceBookIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import TelegramIcon from "components/icons/TelegramIcon";
import CustomTextField from "components/inputs/CustomTextField";
import StyledCheckBox from "components/inputs/StyledCheckBox";
import MainLayout, { IconBox } from "components/layout/main";
import { MainHeader } from "components/styled";
import React from "react";

const Page = () => {
  return (
    <MainLayout>
      <Stack bgcolor="background.header" minHeight="100vh">
        <Container>
          <MainHeader mb="63px">Kontakt</MainHeader>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} sm={12} md={5}>
              <Typography
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="27px"
              >
                Biz bilan bog'lanish
              </Typography>
              <Typography
                fontSize="16px"
                fontWeight="400"
                lineHeight="21px"
                my="25px"
              >
                <a href="mailto:medcare@info.com">medcare@info.com</a>
              </Typography>
              <Typography
                fontSize="16px"
                fontWeight="400"
                lineHeight="21px"
                mb="30px"
              >
                <a href="tel:+998775558587">+998 (77) 555-85-87</a>
              </Typography>
              <Stack direction="row" justifyContent="start" gap={2}>
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
            <Grid item xs={12} sm={12} md={5}>
              <Typography
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="27px"
                mb="25px"
              >
                Bizga yozing va imkon qadar tezroq javob beramiz
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <CustomTextField fullWidth label="Ism" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <CustomTextField fullWidth label="Telefon" />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <CustomTextField fullWidth label="Xabar" multiline rows={4} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <StyledCheckBox />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      display="flex"
                      justifyContent="end"
                    >
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ p: "18px 48px" }}
                      >
                        <Typography
                          fontSize="16px"
                          lineHeight="19px"
                          fontWeight="400"
                        >
                          Yuborish
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </MainLayout>
  );
};

export default Page;
