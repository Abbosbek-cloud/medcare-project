import { Box, Stack, Typography } from "@mui/material";
import { DoctorContainer } from "components/styled";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoctorDrawer from "components/drawers/DoctorDrawer";

const Doctor = (props) => {
  const [modal, setModal] = React.useState(false);
  const toggleDrawer = (_, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log(open);

    setModal(open);
  };

  const handleOpenModal = (e) => {
    if (props.isDoctorPage) {
      toggleDrawer("", true)(e);
    }
  };

  return (
    <DoctorContainer
      isselected={props.isselected ? "true" : undefined}
      sx={{ cursor: "pointer" }}
      onClick={handleOpenModal}
    >
      <Box component="img" src={props.image} className="cardImage" />
      <Typography
        fontSize="27px"
        lineHeight="30px"
        fontWeight="500"
        color="text.dark"
      >
        {props.name}
      </Typography>
      <Typography
        my={2}
        fontSize="20px"
        fontWeight="400"
        lineHeight="150%"
        color="text.light"
      >
        {(props.description && `${props.description.slice(0, 138)}...`) ||
          props.about}
      </Typography>
      {props.isIllness && (
        <Stack
          position={"absolute"}
          bottom={"0"}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={"30px"}
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
      <DoctorDrawer handleDrawerToggle={toggleDrawer} mobileOpen={modal} />
    </DoctorContainer>
  );
};

export default Doctor;
