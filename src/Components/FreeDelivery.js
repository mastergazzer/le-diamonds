import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container, maxWidth } from "@mui/system";
import Divider from '@mui/material/Divider';
function FreeDelivery(props) {
  const { post } = props;

  return (
    <Container sx={{display:"flex", background:"#9B622F", justifyContent:"center", alignItems:"center", padding:"1rem" } } maxWidth={false}>
      <Typography margin={"10px"} sx={{ fontFamily: "Cabin", fontSize:"28px", color:"white" }}>
        FREE DELIVERY
      </Typography>
      <Divider orientation="vertical" variant="middle" flexItem sx={{bgcolor:"white", borderRightWidth: 2, mx:"4rem"}}/>
      <Typography marginRight="4rem" sx={{ fontFamily: "Cabin", color:"white" }}>
        For orders over $199
      </Typography>
      
      <Button
              
              sx={{ width: "166px", p: "0.5rem", color: "#9B622F",
              background:"white",
              fontSize: "14px",}}
            >
              SHOP COLLECTIONS
            </Button>
    </Container>
  );
}

export default FreeDelivery;
