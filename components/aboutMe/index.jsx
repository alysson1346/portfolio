import * as React from "react";

import { Box, Grid } from "@mui/material";
import { NormalText, TitlesBlack } from "../style";
import Pc from "../../public/img/AboutMe/pc.svg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Grid
      pl={["10px", "20px", "60px", "60px", "60px"]}
      pr={["10px", "20px", "60px", "60px", "60px"]}
      container
      flexDirection={["column", "column", "row", "row", "row"]}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Grid sx={{ width: ["100%", "100%", "70%", "70%", "70%"] }}>
        <TitlesBlack>Sobre Mim</TitlesBlack>
        <NormalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </NormalText>
      </Grid>
      <Grid
        sx={{ width: ["80%", "80%", "30%", "30%", "30%"] }}
        container
        justifyContent={"center"}
      >
        <Image src={Pc} />
      </Grid>
    </Grid>
  );
};
export default AboutMe;
