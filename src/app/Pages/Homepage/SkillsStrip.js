import * as React from "react";
import { Container, Grid2, Paper, SvgIcon, Typography } from "@mui/material";
import { globalstyles } from "../globalStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SkillsStrip() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 150);
  }, []);

  let data = [
    { image: "./rct.svg", information: "ReactJS" },
    { image: "./js.svg", information: "JavaScript" },
    { image: "./nodejs.svg", information: "Node.js" },
    { image: "./gcp.svg", information: "Google Cloud Platform" },
    { image: "./python.svg", information: "Python" },
    { image: "./java.svg", information: "Java" },
    { image: "./html5.svg", information: "HTML 5" },
    { image: "./rct.svg", information: "React Native" },
    { image: "./css.svg", information: "CSS 3" },
    { image: "./material.svg", information: "Material UI" },
    { image: "./postman.svg", information: "Postman" },
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
      {isVisible ? (
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
