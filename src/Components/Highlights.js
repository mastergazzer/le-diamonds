import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Highlights(props) {
  const { highlight } = props;

  return (
    <>
      <Box
        sx={{
            mt:"72px"
        //   position: "absolute",
        //   top: 0,
        //   bottom: 0,
        //   right: 0,
        //   left: 0,
        }}
      />
      <Grid container>
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {highlight.map((x) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "row",
                alignContent: "flex-end",
                // display:"flex",
                // flexGrow:0
              }}
            >
              <img src={x.icon} alt={x.icon} style={{marginRight:"10px"}}/>
              <Box>
                <Typography
                  variant="highlightHeading"
                  //color="secondary"
                  paragraph
                  sx={{ mb: 0 }}
                >
                  {x.highlightTitle}
                </Typography>
                <Typography
                  variant="highlightDesc"
                  //color="secondary"
                  paragraph
                  //sx={{ fontFamily: "Cabin" }}
                >
                  {x.highlightDesc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
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

export default Highlights;
