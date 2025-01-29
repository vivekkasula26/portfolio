"use client";

import {
  AppBar,
  Container,
  Divider,
  Grid2,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "./Pages/Components/Footer";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import theme from "./theme";
import { useState } from "react";
import DrawerNav from "./Pages/Components/DrawerNav";

export default function ClientLayout({ children }) {
  const router = useRouter();
  const them = useTheme();
  const isDesktop = useMediaQuery(them.breakpoints.up("md"));
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
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

  const styles = {
    divider: {
      width: "1px",
      height: "18px",
      backgroundColor: "#18181b",
      marginLeft: "15px",
      marginRight: "15px",
    },
    navText: {
      color: "rgb(24 24 27 / 68%)",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(24 24 27 / 100%)",
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "rgb(255 255 255 / 95%)",
          }}
          elevation={1}
        >
          <Container
            sx={{
              height: "60px",
              display: "flex",
              flexFlow: "row",
              alignItems: "center",
            }}
          >
            <Grid2 onClick={() => router.push("/")}>
              <Typography
                sx={{
                  color: "#18181b",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Portfolio
              </Typography>
            </Grid2>
            {isDesktop ? (
              <Grid2
                sx={{
                  display: "flex",
                  flexFlow: "row",
                  marginLeft: "auto",
                  alignItems: "center",
                }}
              >
                <Grid2 onClick={() => scrollToSection("info")}>
                  <Typography sx={styles.navText}>Home</Typography>
                </Grid2>
                <Divider sx={styles.divider} />
                <Grid2 onClick={() => router.push("/about")}>
                  <Typography sx={styles.navText}>About</Typography>
                </Grid2>
                <Divider sx={styles.divider} />
                <Grid2 onClick={() => scrollToSection("projects")}>
                  <Typography sx={styles.navText}>Projects</Typography>
                </Grid2>
                <Divider sx={styles.divider} />
                <Grid2 onClick={() => scrollToSection("contact")}>
                  <Typography sx={styles.navText}>Contact</Typography>
                </Grid2>
              </Grid2>
            ) : (
              <Grid2 style={{ cursor: "pointer", marginLeft: "auto" }}>
                <Image
                  src={"./menu.svg"}
                  width={30}
                  height={30}
                  priority
                  alt="menu"
                  onClick={() => {
                    toggleDrawer(true);
                  }}
                />
                <DrawerNav open={open} onClose={() => toggleDrawer(false)} />
              </Grid2>
            )}
          </Container>
        </AppBar>
        <div style={{ marginTop: "60px", flexGrow: 1 }}>{children}</div>
        <Footer />
      </Grid2>
    </ThemeProvider>
  );
}
