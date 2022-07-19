import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Roofimg from "../images/roof.jpg";
import Guttersimg from "../images/gutters.jpg";
import Drivewayimg from "../images/driveway.jpg";
import Windowsimg from "../images/windows.jpg";
import {
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

class Job {
  constructor(image, name, servicesList) {
    this.image = image;
    this.name = name;
    this.servicesList = servicesList;
  }
}

const roofClean = new Job(Roofimg, "Roofs", [
  "Mold/Mildew Removal",
  "Roof Blow Off",
]);
const gutterClean = new Job(Guttersimg, "Gutters", [
  "Clean Out",
  "Tar Stain Removal",
]);
const concreteClean = new Job(Drivewayimg, "Concrete", [
  "Rust Removal",
  "Surface Clean",
  "Oil Stain Removal",
]);
const windowClean = new Job(Windowsimg, "Windows", [
  "Clean/Shine",
  "Calcium Cleanup",
  "Mildew Removal",
]);

const cleanService = [roofClean, gutterClean, concreteClean, windowClean];

const Services = () => {
  return (
    <Box sx={{ height: "100vh", width: "100%", mt: "1rem" }}>
      <Grid container>
        <Grid item xs={12} justifyContent="center">
          <Typography variant="h3" fontWeight="500" textAlign="center">
            What We Can Do For You
          </Typography>
        </Grid>
        {cleanService.map(({ image, name, servicesList }) => {
          <Grid item xs={3} key={name}>
            <Card>
              <CardMedia
                component="img"
                height="30%"
                image={image}
                alt={name}
              />
              <CardContent>
                <Typography>{name}</Typography>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemText inset primary={servicesList} />;
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>;
        })}
      </Grid>
    </Box>
  );
};

export default Services;
