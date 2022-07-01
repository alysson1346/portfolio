import { Grid, Box, Button } from "@mui/material";
import * as React from "react";
import { TitlesBlack } from "../style";
import project1 from "../../public/img/myProjects/horaRango.jpg";
import Image from "next/image";

const MyProjects = () => {
  return (
    <Box
      pl={["10px", "20px", "60px", "60px", "60px"]}
      pr={["10px", "20px", "60px", "60px", "60px"]}
      sx={{
        backgroundColor: "#EFEFEF",
        margin: "0px",
        paddingTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <TitlesBlack>Projetos Desenvolvidos</TitlesBlack>
      <Grid
        pt="50px"
        container
        flexDirection={"row"}
        gap={["15px", "20px", "10px", "20px", "20px"]}
        justifyContent="space-between"
      >
        <Box width={["100%", "48%", "32%", "32%", "32%"]}>
          <Image src={project1} />
          <Grid container gap={"15px"} sx={{ paddingTop: "10px" }}>
            <Button
              sx={{
                backgroundColor: "#B0009F",
                color: "#FFF",
                borderRadius: "20px",
                fontSize: "12px ",
              }}
            >
              Ver Projeto
            </Button>
            <Button
              sx={{
                backgroundColor: "#2B2B2B",
                color: "#FFF",
                borderRadius: "20px",
                fontSize: "12px ",
              }}
            >
              Acessar Repositório
            </Button>
          </Grid>
        </Box>

        <Box width={["100%", "48%", "32%", "32%", "32%"]}>
          <Image src={project1} />
          <Grid container gap={"15px"} sx={{ paddingTop: "10px" }}>
            <Button
              sx={{
                backgroundColor: "#B0009F",
                color: "#FFF",
                borderRadius: "20px",
                fontSize: "12px ",
              }}
            >
              Ver Projeto
            </Button>
            <Button
              sx={{
                backgroundColor: "#2B2B2B",
                color: "#FFF",
                borderRadius: "20px",
                fontSize: "12px ",
              }}
            >
              Acessar Repositório
            </Button>
          </Grid>
        </Box>

        <Box width={["100%", "48%", "32%", "32%", "32%"]}>
          <Image src={project1} />
          <Grid container gap={"15px"} sx={{ paddingTop: "10px" }}>
            <Button
              sx={{
                backgroundColor: "#B0009F",
                color: "#FFF",
                borderRadius: "20px",
                fontSize: "12px ",
              }}
            >
              Ver Projeto
            </Button>
            <Button
              sx={{
                backgroundColor: "#2B2B2B",
                color: "#FFF",
                borderRadius: "20px",
                fontSize: "12px ",
              }}
            >
              Acessar Repositório
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default MyProjects;
