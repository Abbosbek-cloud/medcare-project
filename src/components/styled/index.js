// doctor cards

import { Box, Typography, styled } from "@mui/material";

export const Doctor1Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.header,
  position: "relative",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "25px",
  "& .imageBox": {
    width: "100px",
    height: "100px",
  },
}));

export const DoctorContainer = styled(Box)(
  ({ theme, isPhone, isselected }) => ({
    padding: "20px",
    position: "relative",
    cursor: "pointer",
    minHeight: "600px",
    borderTop: "1px solid hsla(0, 0%, 0%, .1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderInline: isselected
      ? "1px solid hsla(0, 0%, 0%, .1)"
      : isPhone
      ? ""
      : "",

    "& .cardImage": {
      width: "100%",
      maxWidth: "396px",
      height: "312px",
      objectFit: "cover",
    },

    // Media query for screens larger than 1200px
    "@media (max-width: 1280px)": {
      borderInline: "1px solid hsla(0, 0%, 0%, .1)",

      "& .cardImage": {
        maxWidth: "none",
      },
    },
  })
);

export const MainHeader = styled(Typography)(({ theme }) => ({
  color: "hsla(0, 0%, 14%, 1)",
  fontSize: "100px",
  fontWeight: "500",
  lineHeight: "122px",
  fontStyle: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    fontWeight: "500",
    lineHeight: "52px",
  },
}));

export const SingleTopicsHeader = styled(Typography)(({ theme }) => ({
  color: "#242424",
  fontSize: "36px",
  fontWeight: "400",
  lineHeight: "35px",
  fontStyle: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "32px",
  },
}));

export const CircleTag = styled("p")(({ theme }) => ({
  padding: "14px 24px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.header,
  borderRadius: "50px",
  border: "1px solid rgba(0, 0, 0, 0.10)",
  color: "#000",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "25px",
  fontStyle: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));
