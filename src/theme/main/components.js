import { palette } from "./colors";
export const components = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        "&.MuiChip-filledDefault": {
          backgroundColor: palette.neutral[200],
          "& .MuiChip-deleteIcon": {
            color: palette.neutral[400],
          },
        },
        "&.MuiChip-outlinedDefault": {
          "& .MuiChip-deleteIcon": {
            color: palette.neutral[300],
          },
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
      },
      sizeSmall: {
        padding: "6px 16px",
      },
      sizeMedium: {
        padding: "8px 20px",
      },
      sizeLarge: {
        padding: "11px 24px",
      },
      textSizeSmall: {
        padding: "7px 12px",
      },
      textSizeMedium: {
        padding: "9px 16px",
      },
      textSizeLarge: {
        padding: "12px 16px",
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      outlined: {
        ".MuiPaginationItem-root": {
          border: "none",
          backgroundColor: "#fff",
          color: "rgba(241, 11, 66, 0.99)",
          fontWeight: 700,
        },
        ".MuiPaginationItem-previousNext": {
          backgroundColor: "#FFF",
          color: "rgba(241, 11, 66, 0.99)",
        },
        ".Mui-disabled": {
          backgroundColor: "#FFF",
          color: "rgba(241, 11, 66, 0.99)",
        },
        ".Mui-selected": {
          border: "none",
          color: "#fff !important",
          borderRadius: "50%",
          backgroundColor: "rgba(241, 11, 66, 0.99) !important",
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: "16px 24px",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: "32px 24px",
        "&:last-child": {
          paddingBottom: "32px",
        },
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: "h6",
      },
      subheaderTypographyProps: {
        variant: "body2",
      },
    },
    styleOverrides: {
      root: {
        padding: "32px 24px",
      },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      color: "primary",
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: 500,
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
        fontFamily: "Montserrat",
      },
      html: {
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      },
      body: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#fff",
      },
      "#__next": {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        backgroundColor: "#5048E5",
        height: 3,
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 2000,
      },
      ".MuiRating-sizeSmall": {
        fontSize: "20px",
      },
      ".right_divider": {
        display: "block",
        paddingRight: "20px",
      },
      ".right_divider::after": {
        content: "''",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        width: "1px",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 10,
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
  },
  MuiDrawer: {},
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: 8,
      },
      sizeSmall: {
        padding: 4,
        backgroundColor: "#fff",
        border: "2px solid #FFBA33",
        width: 40,
        height: 40,
        "&:hover": {
          backgroundColor: "#fff",
        },
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "hover",
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        marginRight: "16px",
        "&.MuiListItemIcon-root": {
          minWidth: "unset",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        fontWeight: 500,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiPopover: {
    defaultProps: {
      elevation: 16,
    },
  },
  MuiRadio: {
    defaultProps: {
      color: "primary",
    },
  },
  MuiSwitch: {
    defaultProps: {
      color: "primary",
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.71,
        minWidth: "auto",
        paddingLeft: 0,
        paddingRight: 0,
        textTransform: "none",
        "& + &": {
          marginLeft: 24,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: "15px 16px",
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      h6: {
        fontWeight: 600,
        fontSize: 17,
      },
      h5: {
        fontWeight: 600,
        fontSize: 18,
      },
      h4: {
        fontWeight: 600,
        fontSize: 19,
      },
      h3: {
        fontWeight: 700,
        fontSize: 20,
      },
      h2: {
        fontWeight: 800,
        fontSize: 23,
      },
      h1: {
        fontWeight: 900,
        fontSize: 25,
      },
      body1: {
        fontWeight: 400,
        fontSize: 22,
      },
      body2: {
        fontWeight: 600,
        fontSize: 17,
      },
      string: {
        fontWeight: 500,
        fontSize: 14,
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: 14,
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: 15,
      },
      caption: {
        fontSize: 11,
        fontWeight: 500,
      },
      logoPrint: {
        fontSize: 22,
        fontWeight: 300,
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        borderBottom: "none",
        "& .MuiTableCell-root": {
          borderBottom: "none",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: 0.5,
          textTransform: "uppercase",
        },
        "& .MuiTableCell-paddingCheckbox": {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
  },
};
