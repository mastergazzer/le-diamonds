import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import bestSelling from "../Assets/bestSelling.png";
import earrings from "../Assets/earrings.png";
import rings from "../Assets/rings.png";
import { width } from "@mui/system";
import Divider from '@mui/material/Divider';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const bestSellers = [
  {
    type: "MOISSANITE",
    title: "CAN MOISSANITE BE YOUR NEXT ‘SUPERSTAR’ JEWELRY STONE?",
    desc: "In a world where diamonds are the traditional choice most especially when buying an engagement ring..",
    dateNAuthor: "May 25, 2022     |     by Admin",
  },
  {
    type: "MOISSANITE",
    title: "IS MOISSANITE MORE VALUABLE THAN A DIAMOND?",
    desc: "Are you a bride-to-be? Or are you that individual who is a jewelry lover? No matter what the case is..",
    dateNAuthor: "June 29, 2022     |     by Michael",
  },
  {
    type: "MOISSANITE",
    title: "ENGAGEMENT RING MOISSANITE SINGAPORE BUYING GUIDE",
    desc: "The setting of your Moissanite rings is as unique as your personality. If you’re looking for an..",
    dateNAuthor: "June 14, 2022     |     by Michael",
  },
  {
    type: "JEWELLERY",
    title: "LUXURY DEFINED BY STYLE, NOT PRICE.",
    desc: "Moissanites are lab-grown gemstones, crafted by the most skilled hands to create a sparkle that is..",
    dateNAuthor: "27 September 2022     |     By Admin",
  },
];
function OurBest(props) {
  const {} = props;

  return (
    <>
    <Typography
            //component="h1"
            //variant="h2"
            color="secondary"
            gutterBottom
            sx={{ fontFamily: "Playfair Display", fontSize: "36px", textAlign:"center" }}
          >
            Recent Blogs
          </Typography>
    <Grid container className="App" padding={"5rem"}>
      {bestSellers.map((x) => (
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                //height="140"
                image="https://loremflickr.com/1500/1000"
                
              />
              <CardContent>
                <Box sx={{position:"absolute", right:0, top:"13rem", color:"white", background:"black", p:"5px"}}>
                    <Typography  sx={{fontFamily:"Cabin", fontSize:"12px"}}>
                        {x.type}
                    </Typography>
                </Box>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Cabin", fontSize:"16px"}}>
                  {x.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontFamily:"Cabin", fontSize:"12px"}}>
                 {x.desc}
                </Typography>
              </CardContent>
              <Divider  variant="middle" flexItem sx={{mb:"1rem"}}/>
              <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"Cabin", fontSize:"10px", m:"1rem"}}>
                  {x.dateNAuthor}
                </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default OurBest;
