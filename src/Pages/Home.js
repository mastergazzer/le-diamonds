import React from "react";
//import CssBaseline  from '@mui/material/CssBaseline';
import {
  Grid,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import heroDiamond from "../Assets/Hero.png";
import Navbar from "../Components/Header";
import Hero from "../Components/Hero";
import Highlights from "../Components/Highlights";
import Category from "../Components/Category";
import AboutUs from "../Components/AboutUs";
import OurBest from "../Components/OurBest";
import FreeDelivery from "../Components/FreeDelivery";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
//import logo from './logo.svg';
import deliveryTruck from "../Assets/delivery-truck.svg";
import handShake from "../Assets/hand-shake.svg";
import heartHand from "../Assets/heart-hand.svg";
import ccVisa from "../Assets/cc-visa.svg";

const heroBanner = {
  taglineSmall: "—MORE THAN JUST JEWELLERY",
  taglineBig: "Elegance & Eternity.",
  taglineSmallGrey: "FINELY CRAFTED LAB-GROWN MOISSANITE JEWELLERY",
  image: heroDiamond,
};

const highlights = [
  {
    icon: deliveryTruck,
    highlightTitle: "Free Delivery",
    highlightDesc: "For orders over $199",
  },
  {
    icon: handShake,
    highlightTitle: "30 Days Return",
    highlightDesc: "No questions asked",
  },
  {
    icon: heartHand,
    highlightTitle: "Ethically Made",
    highlightDesc: "From sustainable resources",
  },
  {
    icon: ccVisa,
    highlightTitle: "Secure Payments",
    highlightDesc: "For a seamless checkout",
  },
];

export default function Home() {
  return (
    <>
      {/* <img src={shoppingCart} /> */}
      <Navbar />
      <Hero post={heroBanner} />
      <Highlights highlight={highlights} />
      <Category />
      <AboutUs />
      <OurBest />
      <Blogs />
      <FreeDelivery />
      <Footer/>
    </>
  );
}
