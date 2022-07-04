import * as React from "react";

import { Box, Button, Grid, Link } from "@mui/material";
import Image from "next/image";

import Hidden from "@material-ui/core/Hidden";
import alysson from "../../public/img/Banner/alysson.svg";
import { TitleBanner, TextBanner } from "../style";

export default function Banner() {
  return (
    <Box
      id="Home"
      mt={["80px", "80px", "80px", "0", "0"]}
      pt="25px"
      sx={{
        backgroundColor: "#F2F2F2",
        width: "100%",
      }}
    >
      <Grid container flexDirection={"row"}>
        <Grid sx={{ width: "40%" }} container alignContent={"center"}>
          <Image height={"400px"} src={alysson} />
        </Grid>
        <Grid sx={{ width: "60%" }} container alignContent={"center"}>
          <TitleBanner>Olá, sou Alysson Colombo</TitleBanner>
          <TextBanner>
            Seja bem-vindo ao meu portfólio aqui apresento minhas habilidades e
            projetos!
          </TextBanner>
          <Hidden only={["xs", "sm"]}>
            <Grid container flexDirection={"row"} gap={"24px"}>
              <Link sx={{ textDecoration: "none" }} href="#MySkills">
                <Button
                  sx={{
                    backgroundColor: "#B0009F",
                    color: "#FFF",
                    borderRadius: "20px",
                  }}
                >
                  Ver Habilidades
                </Button>
              </Link>

              <Link sx={{ textDecoration: "none" }} href="#MyProjects">
                <Button
                  sx={{
                    backgroundColor: "#00B0B0",
                    color: "#FFF",
                    borderRadius: "20px",
                  }}
                >
                  Ver Projetos
                </Button>
              </Link>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
}
