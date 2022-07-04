import * as React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { TextSkills, TitlesWhite, BarPercentage } from "../style";

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
      id="MySkills"
      sx={{ backgroundColor: "#0a8f8f" }}
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
        height={["320px", "auto", "auto", "auto", "auto"]}
        sx={{
          overflowY: ["scroll", "scroll", "hidden", "hidden", "hidden"],
          msOverflowStyle: "none",
        }}
      >
        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Html} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Html</TextSkills>
            <BarPercentage value="75" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Css} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Css</TextSkills>
            <BarPercentage value="70" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Js} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Js</TextSkills>
            <BarPercentage value="60" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={ReactLogo} />
          <Grid container flexDirection={"column"}>
            <TextSkills>React</TextSkills>
            <BarPercentage value="80" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Nodejs} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Nodejs</TextSkills>
            <BarPercentage value="60" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Typescript} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Typescript</TextSkills>
            <BarPercentage value="50" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Python} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Python</TextSkills>
            <BarPercentage value="65" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={Postgre} />
          <Grid container flexDirection={"column"}>
            <TextSkills>Postgresql</TextSkills>
            <BarPercentage value="70" max="100" />
          </Grid>
        </Grid>

        <Grid
          container
          flexDirection={"row"}
          flexWrap={"nowrap"}
          alignItems={"center"}
          gap="10px"
          sx={{
            backgroundColor: "#06a1a1",
            width: ["100%", "48%", "32%", "32%", "32%"],
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <Image width={"80px"} src={MongoDb} />
          <Grid container flexDirection={"column"}>
            <TextSkills>MongoDb</TextSkills>
            <BarPercentage value="60" max="100" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySkills;
