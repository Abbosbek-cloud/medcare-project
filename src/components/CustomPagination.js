import { usePagination } from "@mui/lab";
import { styled } from "@mui/material";
import React from "react";
import RightIcon from "./icons/RightIcon";
import LeftIcon from "./icons/LeftIcon";

const List = styled("nav")(({ theme }) => ({
  borderTop: "1px solid hsla(0, 0%, 0%, .1)",
  borderBottom: "1px solid hsla(0, 0%, 0%, .1)",
  paddingBottom: "20px",
  paddingTop: "20px",
  marginTop: "20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  "& button": {
    background: "inherit",
    border: "none",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "150%",
    verticalAlign: "center",
  },

  "& ul": {
    listStyle: "none",
    display: "flex",
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "20px",
      marginLeft: "20px",
    },
    "& button.previous": {
      position: "absolute !important",
      left: 0,
      top: "calc(50% - 15px)",
      fontSize: "30px",
      background: "inherit",
      border: "none",
      cursor: "pointer",
    },
    "& button.selected": {
      color: "#17C37B",
    },
    "& button.next": {
      position: "absolute !important",
      right: 0,
      top: "calc(50% - 15px)",
      fontSize: "30px",
      background: "inherit",
      border: "none",
      cursor: "pointer",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderTop: "1px solid hsla(0, 0%, 0%, .1)",
    borderBottom: "1px solid hsla(0, 0%, 0%, .1)",
    paddingBottom: "20px",
    paddingTop: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "& button": {
      background: "inherit",
      border: "none",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "150%",
      verticalAlign: "center",
    },

    "& ul": {
      listStyle: "none",
      display: "flex",
      "& li": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "9px",
        marginLeft: "9px",
      },
      "& button.previous": {
        position: "absolute !important",
        left: 0,
        top: "calc(50% - 15px)",
        fontSize: "30px",
        background: "inherit",
        border: "none",
        cursor: "pointer",
      },
      "& button.selected": {
        color: "#17C37B",
      },
      "& button.next": {
        position: "absolute !important",
        right: 0,
        top: "calc(50% - 15px)",
        fontSize: "30px",
        background: "inherit",
        border: "none",
        cursor: "pointer",
      },
    },
  },
}));

const CustomPagination = () => {
  const { items } = usePagination({
    count: 10,
  });
  return (
    <List style={{}}>
      <ul>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "...";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                className={selected ? "selected" : ""}
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button className={"button " + type} type="button" {...item}>
                {type === "next" ? (
                  <RightIcon width="50px" height="30px" />
                ) : (
                  <LeftIcon width="50px" height="30px" />
                )}
              </button>
            );
          }

          if (type === "previous" || type === "next") {
            return children;
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </List>
  );
};

export default CustomPagination;
