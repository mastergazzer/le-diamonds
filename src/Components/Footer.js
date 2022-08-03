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

function Footer(props) {
  const { category } = props;

  return (
    <Grid container className="App" padding={"5rem"} sx={{background:"black", color:"white"}}>
      <Grid item xs={12} sm={6} md={2} position={"relative"} top={0} left={0}>
        <Box>
          <Typography>LE DIAMONDS</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>
            With Le Diamonds, we hope to empower and inspire women of all ages,
            giving them the courage and confidence to power through each day
            with their choice of elegant and charming contemporary jewellery.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={10}
        position={"relative"}
        top={0}
        left={0}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          fontFamily: "Cabin",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: "Cabin" }}>Collections</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Rings</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Earrings</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Necklaces</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Bracelets</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Pendants</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Cabin" }}>Information</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>FAQ</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Help & Support</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Terms of Service</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Cabin" }}>Know More</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>All about clarities</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>Partnerships</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Cabin" }}>Contact Info</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}> (+603) 95441361</Typography>
          <Typography sx={{ fontFamily: "Cabin" }}>info@lediamonds.com</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
