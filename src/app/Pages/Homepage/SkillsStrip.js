import * as React from "react";
import { Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SkillsStrip() {
  const [isVisible, setIsVisible] = React.useState(false);
  const them = useTheme();
  const isSmartphone = useMediaQuery(them.breakpoints.down("md"));

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 150);
  }, []);

  let data = [
    { image: "./rct.svg", information: "ReactJS" },
    { image: "./js.svg", information: "JavaScript" },
    { image: "./nodejs.svg", information: "Node.js" },
    { image: "./python.svg", information: "Python" },
    { image: "./java.svg", information: "Java" },
    { image: "./html5.svg", information: "HTML 5" },
    { image: "./rct.svg", information: "React Native" },
    { image: "./css.svg", information: "CSS 3" },
    { image: "./material.svg", information: "Material UI" },
    { image: "./postman.svg", information: "Postman" },
    { image: "./gcp.svg", information: "Google Cloud Platform" },
  ];
  const styles = {
    contianer: {
      display: "flex",
      flexFlow: "row",
    },
  };
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  return (
    <Grid2
      sx={{
        backgroundColor: "#7b829514",
        padding: "8px",
      }}
    >
      {isSmartphone ? (
        <Grid2 container justifyContent={"space-between"}>
          {data.map((item, index) => (
            <Grid2
              sx={{
                display: "flex ",
                flexFlow: "row",
                alignItems: "center",
                paddingY: "3px ",
                paddingX: "10px",
                marginBottom: "15px",
                borderRadius: "10px",
                // justifyContent: "space-between",
              }}
              key={index}
            >
              <Image
                src={item.image}
                width={25}
                height={25}
                priority
                style={{ marginRight: "8px" }}
                alt={item.information}
              />
              <Typography sx={{ fontSize: "12px" }}>
                {item.information}
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      ) : isVisible ? (
        <Slider {...settings}>
          {data.map((item, index) => (
            <Grid2
              sx={{
                display: "flex ! important",
                flexFlow: "row",
                alignItems: "center",
                paddingRight: "25px ! important",
                paddingLeft: "25px ! important",
                justifyContent: "center",
              }}
              key={index}
            >
              <Image
                src={item.image}
                width={25}
                height={25}
                priority
                style={{ marginRight: "8px" }}
                alt={item.information}
              />
              <Typography sx={{ fontSize: "12px" }}>
                {item.information}
              </Typography>
            </Grid2>
          ))}
        </Slider>
      ) : (
        <></>
      )}
    </Grid2>
  );
}
