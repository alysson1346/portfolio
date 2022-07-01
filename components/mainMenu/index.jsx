import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DvrIcon from "@mui/icons-material/Dvr";
import BarChartIcon from "@mui/icons-material/BarChart";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../../public/img/logo.svg";
import { Link } from "@mui/material";

import theme from "../../src/theme";

import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

/* xs, extra-pequeno: 0px
sm, pequeno: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px */

const mainMenu = { color: "#2E7373", textDecoration: "none" };

function MainMenu() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
        backgroundColor: "#038080",
        color: "#fff",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid
          container
          justifyContent="flex-end"
          pr="10px"
          p="10px"
          align-items="center"
        >
          <CloseIcon onClick={() => setState(false)} />
        </Grid>
        <Divider />
        <Grid container alignItems="center" gap="5px" pl="10px">
          <HomeIcon />
          <p>Home</p>
        </Grid>
        <Grid container alignItems="center" gap="5px" pl="10px">
          <AccountCircleIcon />
          <p>Sobre mim</p>
        </Grid>
        <Grid container alignItems="center" gap="5px" pl="10px">
          <BarChartIcon /> <p>Minhas Habilidades</p>
        </Grid>
        <Grid container alignItems="center" gap="5px" pl="10px">
          <DvrIcon />
          <p>Meus Projetos</p>
        </Grid>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ backgroundColor: "#F2F2F2" }}>
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            sx={{ height: "80px" }}
          >
            <Grid
              item
              xs={3}
              pl={["10px", "20px", "60px", "60px", "60px"]}
              container
              flexDirection="row"
              alignItems="center"
            >
              <Hidden only={["xs", "sm", "md"]}>
                <Image width="200px" src={Logo} />
              </Hidden>
              <Hidden only={["lg", "xl"]}>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <MenuIcon
                      onClick={() => {
                        setState({ left: open });
                      }}
                    />

                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </Hidden>
            </Grid>

            <Grid
              item
              xs={5}
              container
              direction="row"
              gap="25px"
              justifyContent="center"
              sx={{ paddingLeft: "24px" }}
            >
              <Hidden only={["xs", "sm", "md"]}>
                <Link sx={mainMenu}>Home</Link>
                <Link sx={mainMenu}>Sobre mim</Link>
                <Link sx={mainMenu}>Minhas Habilidades</Link>
                <Link sx={mainMenu}>Meus Projetos</Link>
              </Hidden>
              <Hidden only={["lg", "xl"]}>
                <Image width="200px" src={Logo} />
              </Hidden>
            </Grid>

            <Grid
              item
              xs={4}
              container
              justifyContent="flex-end"
              pr={["10px", "20px", "60px", "60px", "60px"]}
            >
              <Hidden only={["xs"]}>
                <Link
                  sx={{ textDecoration: "none" }}
                  href="malito:alyssoncolombo@outlook.com"
                >
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "#B0009F",
                      width: "100px",
                      height: "35px",
                      borderRadius: "20px",
                    }}
                  >
                    Contato
                  </Button>
                </Link>
              </Hidden>
            </Grid>
          </Grid>
        </Box>

        <Divider />
      </div>
    </ThemeProvider>
  );
}
export default MainMenu;
