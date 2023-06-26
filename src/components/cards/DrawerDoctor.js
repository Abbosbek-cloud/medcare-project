import { Box, Button, Stack, Typography } from "@mui/material";
import { DoctorContainer } from "components/styled";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoctorDrawer from "components/drawers/DoctorDrawer";

const DrawerDoctor = (props) => {
  const [modal, setModal] = React.useState(false);
  const toggleDrawer = (open) => {
    setModal(open);
  };

  return (
    <DoctorContainer isselected={props.isselected ? "true" : undefined}>
      <Box
        component="img"
        loading="lazy"
        src={props.image}
        className="cardImage"
      />
      <Typography
        fontSize="23px"
        lineHeight="29px"
        fontWeight="500"
        color="text.dark"
      >
        {props.name}
      </Typography>
      <Typography
        my={2}
        fontSize="22px"
        fontWeight="400"
        lineHeight="150%"
        color="text.light"
      >
        {(props.description && `${props.description.slice(0, 138)}...`) ||
          props.about}
      </Typography>
      {props.isDoctorPage && (
        <Button
          variant="outlined"
          color="info"
          onClick={() => toggleDrawer(true)}
        >
          Batafsil
        </Button>
      )}
      {props.isIllness && (
        <Stack
          position={"absolute"}
          bottom={"0"}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width={"90%"}
        >
          <Typography
            fontSize="13px"
            fontWeight="400"
            color="text.light"
            lineHeight="150%"
          >
            {props.time}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="start"
            gap={1}
          >
            <RemoveRedEyeIcon sx={{ color: "neutral.main" }} width="40px" />
            <Typography
              fontSize="13px"
              fontWeight="400"
              color="text.light"
              lineHeight="150%"
            >
              {props.shown}
            </Typography>
          </Stack>
        </Stack>
      )}
      <DoctorDrawer
        handleDrawerToggle={toggleDrawer}
        mobileOpen={modal}
        data={{ ...props }}
      />
    </DoctorContainer>
  );
};

export default DrawerDoctor;
