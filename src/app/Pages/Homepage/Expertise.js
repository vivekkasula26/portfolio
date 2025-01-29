import { Container, Grid2, Paper, Typography } from "@mui/material";
import * as React from "react";
import Image from "next/image";

export default function Expertise() {
  const content = [
    {
      image: "./frontend.png",
      title: "Frontend Development",
      text: "I have deep experience with ReactJS, using advanced concepts like hooks, Redux, React DOM, and libraries such as Material-UI to build dynamic, user-friendly interfaces. My skills extend to responsive design using HTML5 and CSS3, ensuring seamless experiences across devices. Additionally, I have expertise in React Native, enabling the development of cross-platform mobile applications with high performance and a seamless user experience.",
    },
    {
      image: "./backend.png",
      title: "Backend Development",
      text: "I excel in Node.js and Express.js, focusing on creating robust server-side logic and efficiently handling HTTP responses. My expertise includes using MySQL for database management, with a focus on data structures and algorithms to ensure time and space optimization. Additionally, I’ve integrated REST APIs seamlessly to support scalable and reliable backend functionality.",
    },
    {
      image: "./cloud.png",
      title: "Cloud Platform",
      text: "My experience with Google Cloud Platform (GCP) includes implementing CI/CD pipelines integrated with GitHub for automated deployments, utilizing Cloud SQL for database solutions, and leveraging Buckets for secure storage. I am adept at monitoring deployments and configuring cloud resources to support scalable applications.",
    },
  ];

  const styles = {
    bg: {
      zIndex: -1,
      position: "absolute",
      left: 0,
      right: 0,
      height: "100%",
      top: 0,
      backgroundColor: "#ffffff",
      opacity: "0.1",
      background:
        "linear-gradient(135deg, #cfcfcf55 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(225deg, #cfcfcf 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(315deg, #cfcfcf55 25%, transparent 25%) 0px 0/ 80px 80px, linear-gradient(45deg, #cfcfcf 25%, #ffffff 25%) 0px 0/ 80px 80px",
    },
  };

  const Pannel = ({ image, text, title, index }) => {
    return (
      <Grid2
        container
        sx={{
          paddingTop: index == 0 ? "50px" : "25px",
          paddingBottom: index == content.length - 1 ? "50px" : "25px",
          flexDirection: {
            md: index % 2 == 0 ? "row" : "row-reverse",
            xs: "column",
          },
          alignItems: "center",
        }}
      >
        <Grid2
          size={{ md: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={1}
            sx={{ display: "flex", borderRadius: "4px", overflow: "hidden" }}
          >
            <img src={image} height={250} alt={title} />
          </Paper>
        </Grid2>
        <Grid2
          size={{ md: 6 }}
          sx={{
            paddingLeft: { md: index % 2 == 0 ? "10px" : "0px", xs: "0px" },
            paddingRight: { md: index % 2 == 0 ? "0px" : "10px", xs: "0px" },
            paddingTop: { md: "0px", xs: "20px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "24px" },
              marginBottom: "15px",
              textAlign: "justify",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "14px", md: "16px", color: "#71717a" } }}
          >
            {text}
          </Typography>
        </Grid2>
      </Grid2>
    );
  };
  return (
    <Grid2 sx={{ backgroundColor: "#f181818", position: "relative" }}>
      <Grid2 sx={styles.bg} />
      <Container>
        {content.map((item, index) => (
          <Pannel
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            index={index}
          />
        ))}
      </Container>
    </Grid2>
  );
}
