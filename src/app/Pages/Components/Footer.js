import { Container, Grid2, Typography } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Footer(params) {
  const router = useRouter();
  const pathname = usePathname();

  const styles = {
    navText: {
      fontSize: "14px",
      color: "rgb(24 24 27 / 68%)",
      cursor: "pointer",
      marginBottom: "5px",
      "&:hover": {
        color: "rgb(24 24 27 / 100%)",
      },
    },
    title: { marginBottom: "10px", fontWeight: "bold", fontSize: "18px" },
  };

  const scrollToSection = (id) => {
    if (pathname != "/") {
      router.push("/");
    }

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
    <Grid2
      sx={{
        backgroundColor: "#7b82950a",

        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Container
        sx={{
          minHeight: "200px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Grid2
          sx={{
            display: "flex",
            flexFlow: { md: "row", xs: "column" },
          }}
          size={{ md: 12 }}
          container
        >
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Typography sx={styles.title}>Portfolio</Typography>
            <Typography sx={{ color: "rgb(24 24 27 / 68%)" }}>
              © 2025 Vivek Kasula. All rights reserved.
            </Typography>
          </Grid2>
          <Grid2
            size={{ md: 4, xs: 12 }}
            sx={{ paddingY: { md: "0px", xs: "20px" } }}
          >
            <Typography sx={styles.title}>Quick Links</Typography>
            <Typography
              sx={styles.navText}
              onClick={() => router.push("/about")}
            >
              About
            </Typography>
            <Typography
              sx={styles.navText}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Typography>
            <Typography
              sx={styles.navText}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Typography sx={styles.title}>Connect</Typography>
            <Grid2>
              <Image
                src={"./linkedin.svg"}
                width={20}
                height={20}
                priority
                style={{ marginRight: "12px", cursor: "pointer" }}
                alt={"linkedin"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vivek-kasula/",
                    "_blank"
                  )
                }
              />
              <Image
                src={"./github.svg"}
                width={23}
                height={23}
                priority
                style={{
                  marginRight: "12px",
                  cursor: "pointer",
                }}
                alt={"github"}
                onClick={() =>
                  window.open("https://github.com/vivekkasula26", "_blank")
                }
              />
              <a href="mailto:vivekkasula26@gmail.com">
                <Image
                  src={"./email.svg"}
                  width={20}
                  height={20}
                  priority
                  style={{ cursor: "pointer" }}
                  alt="email"
                />
              </a>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
}
