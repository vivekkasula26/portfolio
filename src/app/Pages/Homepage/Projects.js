"use client";
import * as React from "react";
import { useState } from "react";
import { Button, Container, Grid2, Paper, Typography } from "@mui/material";

export default function Projects() {
  const data = [
    {
      img: "./portfolio.png",
      text: "A modern portfolio website built with Next.js and Material UI.",
      title: "Portfolio Website",
      githubLink: "https://github.com/vivekkasula26",
    },
    {
      img: "../ccm.png",
      text: "Deployed a Childcare Management System on GCP, merging React frontend, Node.js with Express.js backend, and MySQL database. Streamlined operations with admin, parent, and teacher logins, child and staff management, attendance tracking, accounting ledger, automated billing and additional functionalities.",
      title: "Child Care Management",
      githubLink: "https://github.com/vivekkasula26",
    },
    {
      img: "./gcpCICD.png",
      text: "Implemented CI/CD on Google Cloud Run, integrating Git Cloud Repo for deployment triggers. Utilized Cloud Database for user details and a bucket for user image BLOB storage. Incorporated traffic split between two revisions to comprehend func- tionality. Developed a Flask-based framework enabling users to upload and view images, along with credential-based login functionality.",
      title: "Google Cloud Platform",
      githubLink: "https://github.com/vivekkasula26",
    },
  ];

  return (
    <Container sx={{ paddingTop: "55px", paddingBottom: "20px" }} id="projects">
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Featured Projects
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "center",
          marginBottom: "20px",
          color: "#71717a",
        }}
      >
        A selection of my recent work in Full stack development and cloud
        platform
      </Typography>
      <Grid2 container spacing={5}>
        {data.map((item, index) => (
          <Grid2 size={{ md: 4, sm: 6, xs: 12 }} key={index}>
            <Paper
              elevation={2}
              sx={{ minHeight: "350px", height: "100%", overflow: "hidden" }}
            >
              <Grid2
                sx={{
                  width: "100%",
                  height: "180px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  style={{ width: "100%", position: "absolute", inset: 0 }}
                  title={index}
                />
              </Grid2>
              <Grid2
                sx={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column", // Arrange items vertically
                  justifyContent: "space-between",
                  height: "calc(100% - 180px)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "justify",
                    color: "#71717a",
                    marginBottom: "20px",
                  }}
                >
                  {item.text}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ marginTop: "auto", width: "fit-content" }}
                  onClick={() => window.open(item.githubLink, "_blank")}
                >
                  GitHub
                </Button>
              </Grid2>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
