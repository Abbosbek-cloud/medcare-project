import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CancelIcon from "components/icons/CancelIcon";
import React from "react";
import DrawerTable from "./DrawerTable";
import TelegramWhiteIcon from "components/icons/TelegramWhiteIcon";

const DoctorDrawer = (props) => {
  const [user, setUser] = React.useState({
    name: "",
    about: "",
    citate: "",
    image: "",
    kasbi: "",
    workStation: "",
    address: "",
    price: "",
    workTime: "",
    id: "",
  });

  React.useEffect(() => {
    setUser({ ...props.data });
  }, [props?.data?.id]);
  const drawer = () => (
    <Box
      sx={{ width: 400, p: "2rem", position: "relative", height: "100%" }}
      role="presentation"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography
              fontSize="25px"
              fontWeight="500"
              lineHeight="30px"
              color="hsla(0, 0%, 0%, 1)"
            >
              {user.name}
            </Typography>
          </Stack>

          <CancelIcon
            width="15px"
            height="15px"
            style={{ cursor: "pointer" }}
            onClick={() => props.handleDrawerToggle(false)}
          />
        </Stack>
        <Typography
          fontWeight="400"
          fontSize="16px"
          lineHeight="150%"
          color="hsla(0, 0%, 0%, .4)"
          mb="25px"
        >
          {user.kasbi}
        </Typography>
      </Stack>
      <Stack>
        <Box
          component="img"
          src={user.image}
          width="100%"
          height="250px"
          sx={{ objectFit: "cover" }}
        />
        <Typography
          my={2}
          fontSize="16px"
          fontWeight="400"
          lineHeight="150%"
          color="text.light"
        >
          {user.about}
        </Typography>
      </Stack>
      <Stack>
        <DrawerTable name="Ish joyi" value={user.workStation} />
        <DrawerTable
          name="Manzil"
          value={user.address.split(" ").slice(0, 3).join(" ")}
        />
        <DrawerTable name="Klinika" value={user.price} />
        <DrawerTable name="Ish vaqti" value={user.workTime} />
      </Stack>
      <Grid container spacing={1} mt={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Button fullWidth color="info" variant="outlined">
            Qo&apos;ng&apos;iroq qilish
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button
            fullWidth
            color="info"
            variant="contained"
            startIcon={<TelegramWhiteIcon fill="#fff" />}
            sx={{ color: "#fff" }}
          >
            Ro&apos;yhatdan o&apos;tish
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={props.mobileOpen}
      onClose={() => props.handleDrawerToggle(false)}
    >
      {drawer()}
    </Drawer>
  );
};

export default DoctorDrawer;
