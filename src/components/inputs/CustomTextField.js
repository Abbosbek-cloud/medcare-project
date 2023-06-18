import React from "react";
import { Box, TextField, styled } from "@mui/material";
import { Small } from "components/Typography";

const CustomTextField = ({ label, InputProps, ...props }) => {
  const boxProps = {};
  const textFieldProps = {};

  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }

  return (
    <Box {...boxProps}>
      {label && (
        <Small
          display="block"
          mb={1}
          textAlign="left"
          fontSize="15px"
          fontWeight="600"
          color="hsla(0, 0%, 0%, 1)"
        >
          {label}
        </Small>
      )}
      <StyledTextField
        InputProps={{
          ...InputProps,
          style: { ...InputProps?.style },
        }}
        sx={{
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& > fieldset": { border: "1px solid green" },
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "hsla(0, 0%, 0%, .1)" },

            "&:hover fieldset": {
              borderColor: "hsla(0, 0%, 0%, .1)",
            },
            "&:focus fieldset": {
              borderColor: "hsla(0, 0%, 0%, .1)",
            },
          },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

const StyledTextField = styled(TextField)(({ theme }) => ({}));

const spacePropList = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];

export default CustomTextField;
