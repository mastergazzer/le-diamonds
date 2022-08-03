import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import aboutUs from "../Assets/aboutUs.png";

import { width } from "@mui/system";

function AboutUs(props) {
  const { about } = props;

  return (
    <Grid container className="App" padding={"5rem"}>
      <Grid item xs={12} sm={6} md={8}>
        <Box
          sx={{
            position: "relative",
            pl:"16rem"
          }}
        >
{/* 
padding-left: 15rem;
    /* padding: 12rem; */
    /* margin: 5rem; */
    /* padding-right: 8rem; */
   /* padding-top: 2rem; */}

          <Typography
            //component="h1"
            //variant="h2"
            color="secondary"
            gutterBottom
            sx={{ fontFamily: "Playfair Display", fontSize: "36px" }}
          >
            Luxury Defined By Style, Not Price.
          </Typography>
          <Typography
            variant="caption"
            //color="#868686"
            paragraph
            sx={{ fontFamily: "Cabin", fontSize: "16px", pr:"22rem" }}
          >
            Moissanites are lab-grown gemstones, crafted by the most skilled
            hands to create a sparkle that is a class of its own. 
          </Typography>
          <Typography  variant="caption"
            //color="#868686"
            paragraph
            sx={{ fontFamily: "Cabin", fontSize: "16px", pr:"22rem" }}>

            Every piece of
            moissanite comes with a certification as a testament to its quality.
            This gemstone is also durable, second only to diamonds in terms of
            hardness. Hence, your fine jewellery pieces from Le Diamonds cannot
            be easily scratched and keep their fire well. Due to its hardness,
            we are also able to create dazzling cuts that will shine brightly on
            you. 
          </Typography>
          <Typography  variant="caption"
            //color="#868686"
            paragraph
            sx={{ fontFamily: "Cabin", fontSize: "16px", pr:"22rem" }}>
            Our attention to quality and detail ensures that all our
            moissanite jewellery is a work of art that you can be proud to wear.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img src={aboutUs} alt="aaaa" />
      </Grid>
    </Grid>
  );
}

export default AboutUs;
