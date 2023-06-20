import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavItem = (props) => {
  return (
    <Link
      href={props.link}
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="500"
        mr={props.isLast ? 0 : 2}
        color={props.isActive ? "success.main" : "text.lightDark"}
      >
        {props.name}
      </Typography>
      {!props.isLast && (
        <Typography variant="h6" fontWeight="500" mr={2} color="text.lightDark">
          /
        </Typography>
      )}
    </Link>
  );
};

export default NavItem;
