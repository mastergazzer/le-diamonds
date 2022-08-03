import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Bodoni Moda",
    button: {
      fontFamily: "Poppins",
      
    },
    highlightHeading: {
      fontFamily: "Cabin",
      fontSize: "14px",
      color: "#00000",
      textTransform:"uppercase",
      fontWeight:"bold"
      
    },
    highlightDesc: {
      fontFamily: "Cabin",
      color: " #868686",
      fontSize: "14px",
    },
  },
  shopCollectionBottom:{
    fontFamily: "Cabin",
      color: "#9B622F",
      background:"white",
      fontSize: "14px",
  },
  palette: {
    primary: {
      main: "#9B622F", //brown
    },
    secondary: {
      main: "#000000", //black
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
