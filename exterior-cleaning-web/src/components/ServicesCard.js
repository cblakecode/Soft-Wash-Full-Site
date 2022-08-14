import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ServicesCard = (props) => {
  return (
    <Card sx={{ height: "80%" }}>
      <CardMedia
        component="img"
        height="170"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.service}
        </Typography>
        <Box component="ul">
          {props.serviceList.map((item) => {
            return <li>{item}</li>;
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
