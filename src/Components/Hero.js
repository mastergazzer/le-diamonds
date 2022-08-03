import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        color: "#fff",
        mb: 4,
        padding: "13rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
        zIndex: 1,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              variant="caption"
              color="secondary"
              paragraph
              sx={{ fontFamily: "Cabin" }}
            >
              {post.taglineSmall}
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              color="secondary"
              gutterBottom
              sx={{ fontFamily: "Playfair Display" }}
            >
              {post.taglineBig}
            </Typography>
            <Typography
              variant="caption"
              color="#868686"
              paragraph
              sx={{ fontFamily: "Cabin" }}
            >
              {post.taglineSmallGrey}
            </Typography>
            <Button
              variant="contained"
              sx={{ width: "166px", p: "0.5rem", fontSize: "12px" }}
            >
              SHOP COLLECTIONS
            </Button>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

// MainFeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageText: PropTypes.string.isRequired,
//     linkText: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default MainFeaturedPost;
