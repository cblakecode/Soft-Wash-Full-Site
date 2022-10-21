import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import drivewayImg from "../images/driveway.jpg";
import guttersImg from "../images/gutters.jpg";
import roofImg from "../images/roof.jpg";
import windowsImg from "../images/windows.jpg";
import ServicesCard from "./ServicesCard";

const listServices = [
  {
    id: 1,
    image: drivewayImg,
    alt: "Clean Driveway",
    title: "Flatwork",
    content: ["Concrete", "Pavers", "Brick", "Rust Removal", "Oil Stains"],
  },
  {
    id: 2,
    image: guttersImg,
    alt: "Clean Gutters",
    title: "Gutters",
    content: ["Tar Stain Removal", "Clean out"],
  },
  {
    id: 3,
    image: roofImg,
    alt: "Clean Roof",
    title: "Roofs",
    content: ["Mold/Mildew Clean", "Blow Off"],
  },
  {
    id: 4,
    image: windowsImg,
    alt: "Clean Windows",
    title: "Windows",
    content: ["Calcium Removal", "Clean and Shine"],
  },
];

const Services = () => {
  return (
    <Paper elevation={4} sx={{borderRadius: "13px", mt: "1rem"}}>
      <Box
        sx={{
          minHeight: "90vh",
          backgroundColor: "grey.600",
          p: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="500"
          textAlign="center"
          sx={{ mb: "1.5rem" }}
        >
          Services
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            mt: "3rem"
          }}
        >
          <Suspense>
            {listServices.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <ServicesCard
                    img={item.image}
                    alt={item.alt}
                    service={item.title}
                    serviceList={item.content}
                  />
                </Grid>
              );
            })}
          </Suspense>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Services;
