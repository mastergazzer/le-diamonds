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

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

const bestSellers = [
  { type: rings, name: "STÉPHANE", price: "$866.00 - $994.00" },
  {
    type: earrings,
    name: "ANDRÉE",
    price: "$943.00 - $1,186.00",
  },
  { type: rings, name: "STÉPHANE", price: "$866.00 - $994.00" },
  {
    type: earrings,
    name: "ANDRÉE",
    price: "$943.00 - $1,186.00",
  },
  { type: rings, name: "STÉPHANE", price: "$866.00 - $994.00" },
  {
    type: earrings,
    name: "ANDRÉE",
    price: "$943.00 - $1,186.00",
  },
  { type: rings, name: "STÉPHANE", price: "$866.00 - $994.00" },
  {
    type: earrings,
    name: "ANDRÉE",
    price: "$943.00 - $1,186.00",
  },
];
function OurBest(props) {
  const {} = props;

  return (
    <Grid container className="App" padding={"5rem"} >
      <Grid item xs={12} sm={6} md={4}>
        <img src={bestSelling} alt="aaaa" style={{width:"97%", height:"96%"}} />
      </Grid>
      <Grid container xs={12} sm={6} md={8}>
        {bestSellers.map((x) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 245, background: "#F2F2F2", borderRadius: 0, boxShadow:0 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  //height="140"
                  image={x.type}
                  alt={x.type}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ fontFamily: "Cabin", textAlign: "center" }}
                  >
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "Cabin", textAlign: "center" }}
                  >
                    {x.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default OurBest;
