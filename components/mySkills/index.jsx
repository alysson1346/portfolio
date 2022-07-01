import * as React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { TextSkills, TitlesWhite } from "../style";

import Html from "../../public/img/skills/html.svg";
import Css from "../../public/img/skills/css.svg";
import Js from "../../public/img/skills/js.svg";
import MongoDb from "../../public/img/skills/mongoDb.svg";
import Nodejs from "../../public/img/skills/nodejs.svg";
import Postgre from "../../public/img/skills/postgre.svg";
import Python from "../../public/img/skills/python.svg";
import ReactLogo from "../../public/img/skills/react.svg";
import Typescript from "../../public/img/skills/html.svg";

const MySkills = () => {
  return (
    <Grid
      sx={{ backgroundColor: "#038080" }}
      pt={"20px"}
      pb={"50px"}
      pl={["10px", "20px", "60px", "60px", "60px"]}
      pr={["10px", "20px", "60px", "60px", "60px"]}
    >
      <Grid>
        <TitlesWhite>Minhas Habilidades</TitlesWhite>
      </Grid>

      <Grid
        container
        flexDirection={"row"}
        gap={["15px", "20px", "10px", "20px", "20px"]}
        justifyContent="space-between"
      >
        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Html} />
          <TextSkills>Frontend - Html</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Css} />
          <TextSkills>Frontend - Css</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Js} />
          <TextSkills>Frontend - Js</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={ReactLogo} />
          <TextSkills>Frontend - React</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Nodejs} />
          <TextSkills>Backend - Nodejs</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Typescript} />
          <TextSkills>Backend - Typescript</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Python} />
          <TextSkills>Backend - Python</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Postgre} />
          <TextSkills>B.D - Postgresql</TextSkills>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#009D9D",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={MongoDb} />
          <TextSkills>B.D - MongoDb</TextSkills>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySkills;
