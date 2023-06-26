import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import AddressIcon from "components/icons/AddressIcon";
import CalendarIcon from "components/icons/CalendarIcon";
import TelegramInfo from "components/icons/TelegramInfo";
import React from "react";

const Clinics = (props) => {
  return (
    <Box borderBottom="1px solid hsla(0, 0%, 0%, .1)" pb="60px">
      <Grid container spacing={2} mb={2} pt="30px">
        <Grid item xs={12} sm={12} md={3}>
          <Box
            component="img"
            loading="lazy"
            src={props.image}
            width="100%"
            height="150px"
            objectFit="cover"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Stack direction="column" justifyContent="space-between" gap="16px">
            <Typography
              fontSize="20px"
              fontWeight="600"
              lineHeight="25px"
              color="text.dark"
            >
              {props.name}
            </Typography>
            <Typography
              fontSize="15px"
              lineHeight="150%"
              fontWeight="400"
              color="text.light"
            >
              {props.description}
            </Typography>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              gap="10px"
            >
              <AddressIcon />
              <Typography fontSize="15px" fontWeight="400" lineHeight="150%">
                {props.address}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              gap="10px"
            >
              <CalendarIcon />
              <Typography fontSize="15px" fontWeight="400" lineHeight="150%">
                {props.time}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Button color="info" variant="outlined" startIcon={<TelegramInfo />}>
            Ro&apos;yhatdan o&apos;tish
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Clinics;
