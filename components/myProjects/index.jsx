import { Grid, Box, Button, Link } from "@mui/material";
import * as React from "react";
import { TitlesBlack } from "../style";
import project1 from "../../public/img/myProjects/horaRango.jpg";
import project2 from "../../public/img/myProjects/kenziehub.jpg";
import project3 from "../../public/img/myProjects/kenzieshop.jpg";

import Image from "next/image";

const MyProjects = () => {
  return (
    <Box
      id="MyProjects"
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
            <Link
              sx={{ textDecoration: "none", color: "#FFF" }}
              href="https://capstone-m3-grupo-5.vercel.app/"
            >
              <Button
                sx={{
                  backgroundColor: "#B0009F",
                  color: "#FFF",
                  borderRadius: "20px",
                  fontSize: "12px ",
                }}
              >
                Ver Projeto
              </Button>{" "}
            </Link>
            <Link
              sx={{ textDecoration: "none", color: "#FFF" }}
              href="https://github.com/devadrianoabner/capstone-m3---grupo-5"
            >
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
            </Link>
          </Grid>
        </Box>

        <Box width={["100%", "48%", "32%", "32%", "32%"]}>
          <Image src={project2} />
          <Grid container gap={"15px"} sx={{ paddingTop: "10px" }}>
            <Link
              sx={{ textDecoration: "none" }}
              href="https://react-entrega-s2-kenzie-hub-alysson1346.vercel.app/"
            >
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
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-alysson1346"
            >
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
            </Link>
          </Grid>
        </Box>

        <Box width={["100%", "48%", "32%", "32%", "32%"]}>
          <Image src={project3} />
          <Grid container gap={"15px"} sx={{ paddingTop: "10px" }}>
            <Link
              sx={{ textDecoration: "none" }}
              href="https://react-entrega-s3-kenzieshop-alysson1346.vercel.app/"
            >
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
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-alysson1346"
            >
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
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default MyProjects;
