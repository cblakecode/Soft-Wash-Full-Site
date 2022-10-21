import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { handleContactOpen } from "../store/slices/modalSlice";

const About = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        mt: "1rem",
        pb: "1.5rem",
        backgroundColor: "#fff"
      }}
    >
      <Grid container spacing={8} sx={{"&.MuiGrid-root": {mt: "0"}}}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center" fontWeight="500">
            About Us
          </Typography>
        </Grid>
        <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <List
            sx={{
              width: "100%",
              bgColor: "background.paper",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              height: "40vh",
            }}
          >
            {[
              "Licensed and Insured",
              "In business for 15 years",
              "Family Owned",
            ].map((value, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" textAlign="left">
            For over a decade, we have provided top notch care to homes and
            businesses throughout the Lowcountry. We can do it all, from
            graffiti, rust, and mold removal to cleaning your home, gutters,
            business, and beyond. Our expertise in the industry has truly been
            refined over the years, making us the only pressure washing service
            you will ever need. Additionally, we carry the best insurance
            possible. Our liability coverage is significantly better than the
            industry standard, so you can rest easy knowing that you are
            protected. Give us a chance and put us to the test. Trust us, we're
            Best Under Pressure.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: "1rem" }}
            onClick={() => dispatch(handleContactOpen())}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
