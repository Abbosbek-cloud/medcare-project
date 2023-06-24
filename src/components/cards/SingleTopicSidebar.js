import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FaceBookIcon from "components/icons/FaceBookIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import TelegramIcon from "components/icons/TelegramIcon";
import { IconBox } from "components/layout/main";

const SingleTopicSidebar = (props) => {
  return (
    <Grid item xs={12} sm={3} md={4}>
      <Grid container>
        <Grid
          item
          xs={12}
          className="section__single-topic-sidebar"
          borderTop={"1px solid #EEEEEE"}
          borderBottom={"1px solid #EEEEEE"}
        >
          <Typography
            fontSize="13px"
            fontWeight="400"
            color="text.light"
            lineHeight="150%"
          >
            {props.time}
          </Typography>
          <Stack
            mt={"10px"}
            direction="row"
            alignItems="center"
            justifyContent="start"
            gap={1}
          >
            <RemoveRedEyeIcon sx={{ color: "neutral.main" }} width="24px" />
            <Typography
              fontSize="13px"
              fontWeight="400"
              color="text.light"
              lineHeight="150%"
            >
              {props.shown}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          className="section__single-topic-sidebar"
          borderBottom={"1px solid #EEEEEE"}
        >
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="text.light"
            lineHeight="150%"
          >
            Muallif:
          </Typography>
          <Typography
            mt={"10px"}
            fontSize="18px"
            fontWeight="400"
            color="text.lightDark"
            lineHeight="150%"
          >
            {props.author}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className="section__single-topic-sidebar"
          borderBottom={"1px solid #EEEEEE"}
        >
          <Typography
            fontSize="14px"
            fontWeight="400"
            color="text.light"
            lineHeight="150%"
          >
            Social Media:
          </Typography>
          <Stack direction="row" justifyContent={"start"} gap={2} mt={"10px"}>
            <IconBox>
              <FaceBookIcon />
            </IconBox>
            <IconBox>
              <InstagramIcon />
            </IconBox>
            <IconBox>
              <TelegramIcon />
            </IconBox>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleTopicSidebar;
