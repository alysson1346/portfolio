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
            <LinkedInIcon />
            <Link sx={{ color: "#FFF", textDecoration: "none" }}>Linkedin</Link>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            gap="2px"
            sx={{ color: "#fff" }}
          >
            <EmailIcon />
            <Link sx={{ color: "#FFF", textDecoration: "none" }}>E-mail</Link>
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
            <GitHubIcon />
            <Link sx={{ color: "#FFF", textDecoration: "none" }}>Github</Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
