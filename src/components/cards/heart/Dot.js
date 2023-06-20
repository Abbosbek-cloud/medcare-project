import { Box, styled } from "@mui/material";
import React from "react";

const Dot = (props) => {
  return (
    <StyledDot {...props}>
      <Box className="child" />
    </StyledDot>
  );
};

export default Dot;

const StyledDot = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "hsla(0, 0%, 100%, .4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .child": {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "hsla(0, 0%, 100%, 1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    "& .child": {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
    },
  },
}));
