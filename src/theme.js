import { createTheme } from "@mui/material/styles";
const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#00B0B0",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#B0009F",
    },
    terciary: {
      main: "#2E7373",
    },

    mainMenu: {
      main: "#2E7373",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
      ],
    },
  },
});

export default theme;
