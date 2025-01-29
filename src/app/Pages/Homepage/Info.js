import * as React from "react";
import { Button, Container, Grid2, Typography } from "@mui/material";
import { globalstyles } from "../globalStyles";

export default function Info() {
  const styles = {
    contianer: {
      display: "flex",
      flexFlow: "row",
    },
    infobg: {
      position: "absolute",
      left: "0px",
      top: "60px",
      width: "250px",
      height: "250px",
      borderBottomRightRadius: "100%",
      backgroundColor: "#eef4fa",
      opacity: "0.1",
      backgroundImage:
        "repeating-radial-gradient(circle at 0 0, transparent 0, #eef4fa 30px), repeating-linear-gradient(#2047572b, #2d5567)",
    },
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 40,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <Container sx={globalstyles.conatiner} id="info">
      <Grid2
        container
        sx={{ display: "flex", flexFlow: { md: "row", xs: "column-reverse" } }}
      >
        <Grid2
          size={{ md: 8 }}
          sx={{
            paddingRight: { xs: "0px", md: "5px" },
            minHeight: "100px",
            paddingTop: { xs: "20px", md: "0px" },
          }}
        >
          <Grid2 sx={styles.infobg} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "40px", xs: "30px" },
              marginBottom: "20px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Hello, I’m Vivek Kasula
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            I am a web developer with expertise in front-end development and a
            strong foundation in building full-stack solutions through hands-on
            projects. With more than two years of professional experience, I
            have developed interactive user interfaces using React, React
            Native, Node.js, and various web technologies. Additionally, I have
            contributed to projects that involved creating robust back-end
            systems utilizing Node.js and cloud-based solutions. My work
            emphasizes delivering efficient, user-centric applications that are
            scalable and reliable. I enjoy solving complex challenges, taking
            ownership of tasks, and contributing to impactful solutions.
          </Typography>
        </Grid2>
        <Grid2
          size={{ md: 4 }}
          sx={{
            paddingLeft: { md: "20px" },
            alignItems: "center",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <img
            src="./profile.png"
            style={{ maxWidth: "70%" }}
            title="profile"
          />
          <Typography
            sx={{ fontSize: "18px", marginTop: "10px", fontWeight: "bold" }}
          >
            Web Developer
          </Typography>
          <Grid2 sx={{ marginTop: "8px" }}>
            <Button
              variant="contained"
              size="medium"
              sx={{ marginRight: "10px" }}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
            <Button
              variant="outlined"
              size="medium"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}
