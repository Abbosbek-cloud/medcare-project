import { Box, Stack, Typography } from "@mui/material";
import { DoctorContainer } from "components/styled";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Doctor = (props) => {
  return (
    <DoctorContainer isSelected={props.isSelected}>
      <Box component="img" src={props.image} className="cardImage" />
      <Typography fontSize="32px" fontWeight="500" color="text.dark">
        {props.name}
      </Typography>
      <Typography my={2} fontSize="22px" fontWeight="400" color="text.light">
        {props.description}
      </Typography>
      {props.isIllness && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="18px" fontWeight="400" color="text.light">
            {props.time}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="start"
            gap={2}
          >
            <RemoveRedEyeIcon color="neutral.main" width="40px" />
            <Typography fontSize="18px" fontWeight="400" color="text.light">
              {props.shown}
            </Typography>
          </Stack>
        </Stack>
      )}
    </DoctorContainer>
  );
};

export default Doctor;
