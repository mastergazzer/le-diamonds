import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import bgBracelets from "../Assets/bgBracelets.png";
import bgEarrings from "../Assets/bgEarrings.png";
import bgNecklace from "../Assets/bgNecklace.png";
import bgNewJewel from "../Assets/bgNewJewel.png";
import bgPendants from "../Assets/bgPendant.png";
import bgRings from "../Assets/bgRings.png";
import bracelets from "../Assets/bracelets.png";

import earrings from "../Assets/earrings.png";
import necklaces from "../Assets/necklaces.png";
import newJewel from "../Assets/newJewel.png";
import pendants from "../Assets/pendants.png";
import rings from "../Assets/rings.png";
import { width } from "@mui/system";

function Category(props) {
  const { category } = props;

  return (
    <Grid container className="App" padding={"5rem"}>
      <Grid item xs={12} sm={6} md={6} position={"relative"} top={0} left={0}>
        <Box>
          <img
            src={bgNewJewel}
            alt="aaaa"
            style={{ position: "relative", top: 0, left: 0, width:"100%"}}
          />
          <img
            src={newJewel}
            alt="aaaa"
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={3} position={"relative"} top={0} left={0}>
        <Box>
          <img
            src={bgEarrings}
            alt="aaaa"
            style={{ position: "relative", top: 0, left: 0, width:"100%" }}
          />
          <img
            src={earrings}
            alt="aaaa"
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={3} position={"relative"} top={0} left={0}>
        <Box>
          <img
            src={bgBracelets}
            alt="aaaa"
            style={{ position: "relative", top: 0, left: 0 , width:"100%"}}
          />
          <img
            src={bracelets}
            alt="aaaa"
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={3} position={"relative"} top={0} left={0}>
        <Box>
          <img
            src={bgNecklace}
            alt="aaaa"
            style={{ position: "relative", top: 0, left: 0, width:"100%" }}
          />
          <img
            src={necklaces}
            alt="aaaa"
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={6} position={"relative"} top={0} left={0}>
        <Box>
          <img
            src={bgRings}
            alt="aaaa"
            style={{ position: "relative", top: 0, left: 0, width:"100%" }}
          />
          <img
            src={rings}
            alt="aaaa"
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={3} position={"relative"} top={0} left={0}>
        <Box>
          <img
            src={bgPendants}
            alt="aaaa"
            style={{ position: "relative", top: 0, left: 0, width:"100%" }}
          />
          <img
            src={pendants}
            alt="aaaa"
            style={{ position: "absolute", top: "40px", left: "60px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Category;
