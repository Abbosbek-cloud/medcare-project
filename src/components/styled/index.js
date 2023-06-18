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
  ".imageBox": {
    position: "absolute",
    right: "20px",
    top: "20px",
    width: "100px",
    height: "100px",
  },
}));

export const DoctorContainer = styled(Box)(
  ({ theme, isPhone, isSelected }) => ({
    padding: "20px",
    borderTop: "1px solid hsla(0, 0%, 0%, .1)",
    borderInline: isSelected
      ? "1px solid hsla(0, 0%, 0%, .1)"
      : isPhone
      ? ""
      : "",
    "& .cardImage": {
      width: "100%",
      height: "312px",
      marginBottom: "20px",
      objectFit: "cover",
    },
  })
);

export const MainHeader = styled(Typography)(({ theme }) => ({
  color: "hsla(0, 0%, 14%, 1)",
  fontSize: "100px",
  fontWeight: "500",
  lineHeight: "122px",
  fontStyle: "normal",
}));
