import { Container, Divider, Grid2, Paper, Typography } from "@mui/material";
import { globalstyles } from "../Pages/globalStyles";
import Image from "next/image";

export default function About() {
  const summary = [
    " As a Front-End Developer with 2 years of experience, I had the privilege of working closely with the CTO at IndigoLearn, where I independently managed the front-end development of the platform. My contributions included developing a diverse range of pages, such as an interactive blogs page, a dynamic study planner, integration of payment gateways and an online exam platform, while building the majority of the website’s UI components and Mobile application. I also collaborated closely with back-end teams to ensure seamless integration and successfully implemented UX/UI designs. These efforts resulted in a 40% increase in user engagement and significantly improved the platform's overall performance. Additionally, I took on the responsibility of mentoring interns, enhancing team productivity and fostering a collaborative development environment.",

    "During my master’s program, I explored cloud technologies and developed projects leveraging Google Cloud Platform. This included implementing CI/CD pipelines on GCP, building scalable back-end systems, and integrating cloud databases for efficient data management. Additionally, I deployed a full-stack Child Care Management System with a React front-end, a Node.js backend, and MySQL, streamlining multiple operational workflows.",

    "With expertise in React, React Native, Node.js, Redux, and JavaScript, I thrive on solving complex technical challenges and delivering user-focused solutions. I’m currently seeking opportunities in Front-End Development and Full-Stack Development, where I can contribute to building impactful, user-centric solutions that drive business growth and enhance customer experiences. I am eager to bring my technical expertise to innovative teams while continuously learning and adopting new technologies to further amplify the value of my contributions.",
  ];
  const experienc1 = {
    company: "Indigolearn",
    role: "Web and App Developer, India",
    duration: "May 21 - Nov 22",
    data: [
      "Designed and developed many innovative web pages and complex UI components, leveraging multiple npm libraries, to prioritize user-centric design. Transformed intricate features into intuitive interfaces, enhancing the learning experience and increase in user engagement.",
      "Refactored and implemented Redux into the website and mobile application existing codebase to increase efficiency and reduce latency, complexity by 25% by addressing critical bugs, solving latency issues, and adapting to new requirements.",
      "Led the intricate development of the Study Planner and dynamic online exam platform, leveraging Data Structures and Algorithms (DSA) principles, which resulted in a 40% increase in user traffic. Integrated a video player and retrieved user analytics to understand user interactions, providing valuable insights for management and sales teams to improve strategies and decision-making. This resulted in increased user satisfaction and an 18% increase in sales.",
      "Integrated Razorpay API for payment gateway, enabled Google and Apple sign-ins, resulting in a 15% increase in registrations and 23% faster transactions. This reduced the sales team’s need for lengthy calls and follow-ups.",
      "Worked closely with the Back-End team to retrieve data elegantly and synchronously using REST APIs and Axios services.",
      "Managed a team of interns, delegated tasks, performed code reviews, and provided guidance, resulting in a 20% increase in overall team productivity.",
    ],
  };

  const experienc2 = {
    company: "Indigolearn",
    role: "Web Developer Intern, India",
    duration: "Feb 21 - April 22",
    data: [
      "Identified and resolved critical bugs in client-side rendering by eliminating duplicate REST API calls and mitigating UI flicker effects through a comprehensive understanding of React lifecycle hooks and concepts resulting in 10% decrease in server-side processes.",
      "Redesigned and developed existing UI components to achieve a more visually appealing and feature-rich appearance.",
      "Implemented server-side rendering for multiple pages, significantly enhancing the website’s SEO performance.",
    ],
  };

  const education = {
    degree: "Masters in Computer Science",
    uni: "Florida Atlantic University",
    loc: "Boca Raton, FL",
    gpa: "3.8",
    gradyear: "Dec 2024",
    courses:
      "Deep Learning, Computational Foundations of AI, Intro to DS, Cloud Computing, Software Engineering Bachelors of Technology in Computer Science Engineering",
  };

  let skillsData = [
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
    title: {
      fontWeight: "bold",
      fontSize: "24px",
      marginBottom: "10px",
      marginTop: "10px",
    },
  };

  const Card = ({ children }) => {
    return (
      <Paper
        elevation={1}
        sx={{
          marginBottom: "20px",
          padding: "15px",
          overflow: "hidden",
          border: "0.5px solid #eceff4",
        }}
      >
        {children}
      </Paper>
    );
  };

  const EmploymentDetails = ({ item }) => {
    return (
      <Card>
        <Grid2
          sx={{
            display: "flex",
            flexFlow: { md: "row", xs: "column" },
            alignItems: { md: "center" },
            marginBottom: "15px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: { md: "0px", xs: "7px" },
            }}
          >
            {item.company}
          </Typography>
          <Divider
            orientation="vertical"
            sx={{
              width: "1px",
              height: "16px",
              backgroundColor: "#18181b",
              marginLeft: "15px",
              marginRight: "15px",
              display: { xs: "none", md: "block" },
            }}
          />
          <Typography
            sx={{
              marginBottom: { md: "0px", xs: "7px" },
            }}
          >
            {item.role}
          </Typography>
          <Typography sx={{ marginLeft: { md: "auto" } }}>
            {item.duration}
          </Typography>
        </Grid2>
        {item.data.map((item, index) => (
          <Grid2
            sx={{
              display: "flex",
              flexFlow: "row",
              marginTop: "15px",
              textAlign: "justify",
            }}
            key={index}
          >
            <Typography
              sx={{
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              &#x2022;
            </Typography>
            <Typography sx={{ color: "#646464" }}> {item}</Typography>
          </Grid2>
        ))}
      </Card>
    );
  };

  const EducaitionsDetails = ({ item }) => {
    return (
      <Card>
        <Grid2
          sx={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            {item.degree}
          </Typography>
          <Typography>{item.gradyear}</Typography>
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#646464" }}>
            {item.uni} {item.loc}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>{item.gpa}</Typography>
        </Grid2>
        <Typography sx={{ marginTop: "10px" }}>{item.courses}</Typography>
      </Card>
    );
  };

  return (
    <Container sx={globalstyles.conatiner}>
      <Grid2
        container
        sx={{
          display: "flex",
          flexFlow: { md: "row", xs: "column" },
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <img src="./profile.png" width={250} alt="profile" />
        <Grid2 sx={{ marginLeft: { md: "50px" }, marginTop: "" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "40px", xs: "30px" },
              marginBottom: "10px",
              textAlign: { md: "left", xs: "center" },
              marginTop: {
                xs: "10px",
                md: "0px",
              },
            }}
          >
            Vivek Kasula
          </Typography>
          <Typography>
            Front-End Developer | Full-Stack Developer, React, React Native,
            Node.js, Redux, Express.js | Enhancing UX & Driving Scalable
            Solutions
          </Typography>
        </Grid2>
      </Grid2>
      <Typography sx={styles.title}>Professional Summary</Typography>
      <Card>
        {summary.map((item, index) => (
          <Typography
            sx={{
              color: "#646464",
              marginBottom: "25px",
              textAlign: "justify",
            }}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </Card>
      <Typography sx={styles.title}>Work Experience</Typography>
      <EmploymentDetails item={experienc1} />
      <EmploymentDetails item={experienc2} />
      <Typography sx={styles.title}>Education</Typography>
      <EducaitionsDetails item={education} />
      <Typography sx={styles.title}>Skills</Typography>
      <Card>
        <Grid2 container>
          {skillsData.map((item, index) => (
            <Grid2
              sx={{
                display: "flex ! important",
                flexFlow: "row",
                alignItems: "center",
                paddingRight: "25px ! important",
                // paddingLeft: "25px ! important",
                marginBottom: "15px",
                // justifyContent: "center",
                width: { md: "250px", xs: "50%" },
              }}
              key={index}
            >
              <Image
                src={item.image}
                width={30}
                height={30}
                priority
                style={{ marginRight: "8px" }}
                alt={item.information}
              />
              <Typography sx={{ fontSize: "14px" }}>
                {item.information}
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      </Card>
    </Container>
  );
}
