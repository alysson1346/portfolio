import * as React from "react";
import { Grid, Box, Link } from "@mui/material";

import { TextFooterTitle, TextFooter } from "../style";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <Grid sx={{ backgroundColor: "#038080", padding: "30px" }}>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"center"}
        gap="40px"
      >
        <Box>
          <TextFooterTitle>Faça contato via:</TextFooterTitle>
          <Grid
            container
            flexDirection={"row"}
            gap="2px"
            sx={{ color: "#fff" }}
          >
            <Link
              sx={{ textDecoration: "none", color: "#fff" }}
              href="https://www.linkedin.com/in/alysson-colombo-7b5b84207"
            >
              {" "}
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alysson-colombo-7b5b84207"
              sx={{ color: "#FFF", textDecoration: "none" }}
            >
              Linkedin
            </Link>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            gap="2px"
            sx={{ color: "#fff" }}
          >
            <Link sx={{ color: "#FFF" }} href="alyssoncolombo@outlook.com">
              <EmailIcon />
            </Link>
            <Link
              href="malito:alyssoncolombo@outlook.com"
              sx={{ color: "#FFF", textDecoration: "none" }}
            >
              E-mail
            </Link>
          </Grid>
        </Box>
        <Box>
          <TextFooterTitle>Conheça meu repositório:</TextFooterTitle>
          <Grid
            container
            flexDirection={"row"}
            gap="2px"
            sx={{ color: "#fff" }}
          >
            <Link href="https://github.com/alysson1346" sx={{ color: "#fff" }}>
              <GitHubIcon />
            </Link>
            <Link
              href="https://github.com/alysson1346"
              sx={{ color: "#FFF", textDecoration: "none" }}
            >
              Github
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
