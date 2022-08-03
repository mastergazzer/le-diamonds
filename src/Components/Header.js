import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//svg icons from figma
import shoppingCart from "../Assets/shopping-cart.svg";
import profileIcon from "../Assets/profile.svg";
import hamburgerIcon from "../Assets/hamburger.svg";

//for drawers
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Suchen…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

const pages = ["Collections", "Our Story", "Blogs"];

const Navbar = () => {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static" sx={{ background: "white", borderBottom: 1, borderColor: 'divider' }}>
      <Box
        bgcolor={"primary.main"}
        textAlign={"center"}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <Typography margin={"10px"} sx={{ fontFamily: "Cabin" }}>
          FREE DELIVERY FOR ORDERS ABOVE $199
        </Typography>
      </Box>

      <Container maxWidth="xl" disableGutters="true">
        <Toolbar >
          <Box>
            <Link href="#" underline="none">
              <Typography
                variant="h6"
                sx={{
                  mr: "68px",
                  fontWeight: 400,
                  fontSize: "2.25rem",
                  lineHeight: 2.6,
                  color: "black",
                }}
              >
                LE DIAMONDS
              </Typography>
            </Link>
          </Box>

          {/* <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}
          >
            {search}
          </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                href="#"
                underline="none"
                key={page}
                //onClick={handleCloseNavMenu}
              >
                <Typography
                  sx={{
                    my: 2,
                    mr: "65px",
                    color: "black",
                    display: "block",
                    fontSize: "1.2rem",
                    fontFamily: "Cabin",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* start of shopping cart and profile icons in computer view */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Cabin",
                color: "black",
                m: 2,
              }}
            >
              FREE DELIVERY FOR ORDERS ABOVE $199
            </Typography>
            <IconButton
              edge="start"
              color="primary"
              sx={{
                mr: 2,
                display: {
                  xs: "block",
                  sm: "block",
                },
              }}
            >
              <img src={shoppingCart} alt="shopping cart" />
            </IconButton>

            <IconButton
              edge="start"
              color="primary"
              sx={{
                mr: 2,
                display: {
                  xs: "block",
                  sm: "block",
                },
              }}
            >
              <img src={profileIcon} alt="profile" />
            </IconButton>
          </Box>
          {/* end of shopping cart and profile icons in computer view */}

          {/* start of hamburger button in phone view */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              color="primary"
              sx={{
                mr: 2,
                // display: {
                //   xs: "block",
                //   sm: "block",
                // },
              }}
            >
              <img src={shoppingCart} alt="shopping cart" />
            </IconButton>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                // right: 0,
                // position: "absolute",
                mr: 2,
                // display: {
                //   xs: "block",
                //   sm: "none",
                // },
              }}
            >
              <img src={hamburgerIcon} alt="hamburger menu" />
            </IconButton>
          </Box>
          {/* end of hamburger button in phone view */}

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#fffff",
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemText primary="Collection" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText primary="Our Story" />
                </ListItemButton>

                <ListItemButton>
                  {/* <ListItemIcon>
                    <FolderIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon> */}
                  <ListItemText primary="Blogs" />
                </ListItemButton>
              </Box>

              {/* {search} */}

              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box> */}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
