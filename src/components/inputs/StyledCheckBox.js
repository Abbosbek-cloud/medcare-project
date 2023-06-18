import { Box, Stack, Typography } from "@mui/material";
import CheckedIcon from "components/icons/CheckedIcon";
import React from "react";

const StyledCheckBox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Stack
      direction="row"
      height="100%"
      display="flex"
      justifyContent="start"
      gap="10px"
      alignItems="center"
      sx={{ cursor: "pointer" }}
      onClick={() => setChecked(!checked)}
    >
      <Box
        minWidth="36px"
        minHeight="36px"
        border="1px solid hsla(0, 0%, 0%, .1)"
        borderRadius="5px"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {checked && (
          <CheckedIcon width="36" height="36" position="absolute" left="10" />
        )}
      </Box>
      <Typography
        color="hsla(0, 0%, 55%, 1)"
        fontSize="13px"
        fontWeight="400"
        lineHeight="17px"
      >
        Men shaxsiy ma'lumotlarni qayta ishlashga roziman
      </Typography>
    </Stack>
  );
};

export default StyledCheckBox;
