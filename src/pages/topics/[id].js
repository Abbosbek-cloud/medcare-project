import { Container, Grid, Stack } from "@mui/material";
import HeaderComponent from "components/HeaderComponent";
import Doctor from "components/cards/Doctor";
import MainLayout from "components/layout/main";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { SingleTopicsHeader } from "components/styled";
import { topics } from "data/topics";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import React from "react";
import Link from "@mui/material/Link";
import RightSmallCursor from "components/icons/RightSmallCursor";
import SingleCard from "components/cards/SingleCard";
import SingleTopicSidebar from "components/cards/SingleTopicSidebar";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const SingleTopic = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="black.main"
      href="/"
      onClick={handleClick}
    >
      Bosh sahifa
    </Link>,
    <Typography key="3" color="success.main">
      Maqolalar
    </Typography>,
  ];

  return (
    <>
      <Head>
        <title>Maqolalar</title>
        <meta
          name="description"
          content="MedCare loyihasining maqolalar sahifasi"
        />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Stack bgcolor="background.header" pt={9}>
          <Container>
            <Breadcrumbs
              separator={<RightSmallCursor />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Container>
          <Container>
            <SingleTopicsHeader mt="30px" mb="40px">
              Homiladorlikning dastlabki belgilari
            </SingleTopicsHeader>
          </Container>
        </Stack>
        <Container>
          <Grid
            container
            mt="24px"
            mb={"36px"}
            className="single-topic-container"
            columnSpacing={4}
            rowSpacing={3}
          >
            <SingleTopicSidebar
              time="2.06.2023"
              shown="99"
              author="Rasuleva Yulduza Samatovna"
            />
            <SingleCard />
          </Grid>
        </Container>
        <Container>
          <HeaderComponent
            name="Yangiliklar"
            linkName="Barcha yangiliklar"
            link="/topics"
            none={true}
          >
            <Grid container mb="60px">
              {topics.slice(0, 3).map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} mb="30px">
                  <Doctor
                    key={item.id}
                    {...item}
                    isIllness={true}
                    isselected={[1, 4, 7].includes(index) ? "true" : undefined}
                  />
                </Grid>
              ))}
            </Grid>
          </HeaderComponent>
        </Container>
      </MainLayout>
    </>
  );
};

export default SingleTopic;
