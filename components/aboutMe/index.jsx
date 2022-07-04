import * as React from "react";

import { Box, Grid } from "@mui/material";
import { NormalText, TitlesBlack } from "../style";
import Pc from "../../public/img/AboutMe/pc.svg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Grid
      id="AboutMe"
      pt="30px"
      pb="40px"
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
          Desde criança me interesso pela tecnologia e o que ela pode nos
          oferecer. Eu passava horas pesquisando artigos e vídeos sobre
          celulares, videogames e a experiência que eles nos proporcionavam.
          Como amante da tecnologia resolvi estudar programação para sempre
          estar por dentro das últimas novidades desse mercado que vem crescendo
          a cada dia que se passa. Tenho experiência em programação numa startup
          que criei com um amigo onde desenvolvi muito bem a base da programação
          juntamente com sua lógica. Atualmemte continuo estudando para sempre
          atender as necessidades do mercado!
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
