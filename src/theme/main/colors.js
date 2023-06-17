const primary = {
  main: "#F10B42",
  light: "rgba(241, 11, 66, 0.1)",
  dark: "#E11515",
  contrastText: "#ffffff",
  border: "#E8E9F8",
  100: "#F4F0F1",
  200: "rgba(241, 11, 66, 0.06)",
  300: "#F5F6F8",
  400: "#F0F3F9",
};

const secondary = {
  main: "#EDEFF2",
  dark: "#EEEEEE",
  light: "#F3F5F7",
  contrastText: "#566A7F",
  thin: "rgba(86, 106, 127, 0.1)",
};

const success = {
  main: "#17C37B",
  light: "#F1E5D7",
  dark: "#0E8074",
  contrastText: "#FFFFFF",
  100: "#E7F9ED",
  200: "#C2F1D1",
  300: "#99E8B3",
  400: "#52D77E",
  500: "#33D067",
  600: "#2ECB5F",
  700: "#27C454",
  800: "#20BE4A",
  900: "#0b7724",
};

const neutral = {
  main: "#848484",
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
};

const warning = {
  main: "#FFB020",
  light: "#FFBF4C",
};

const error = {
  main: "#FF3333",
  light: "#FFE7E7",
  100: "#FFEAEA",
  200: "#FFCBCB",
  300: "#FFA9A9",
  400: "#FF6D6D",
  500: "#FF5353",
  600: "#FF4C4C",
  700: "#FF4242",
  800: "#FF3939",
  900: "#FF2929",
};

const background = {
  main: "#fff",
  header: "#F9F9F9",
  paper: "#FFFFFF",
};

const black = {
  main: "#000000",
};

const disabled = {
  main: "#C4C2BF",
  contrastText: "#ffffff",
  input: "#8B8B8B",
  border: "#f7f7f7",
};

const text = {
  main: "#323232",
  light: "#545454",
  dark: "#000000",
  lightDark: "#242424",
  footer: "#555555",
};

const divider = "#E6E8F0";

export const palette = {
  primary: primary,
  secondary: secondary,
  success: success,
  info: info,
  warning: warning,
  error: error,
  text: text,
  divider: divider,
  background: background,
  neutral: neutral,
  black: black,
  disabled: disabled,
  action: {
    active: neutral[500],
    focus: "rgba(55, 65, 81, 0.12)",
    hover: "rgba(55, 65, 81, 0.04)",
    selected: "rgba(55, 65, 81, 0.08)",
    disabledBackground: "rgba(55, 65, 81, 0.12)",
    disabled: "rgba(55, 65, 81, 0.26)",
  },
};
