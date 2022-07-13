import React from "react";
import Image from "../../../assets/images/pavlos-stamatopoulos-fv49_MksCxc-unsplash.jpg";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Image})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        borderRadius: "12px",
        height: "100vh",
        width: "100%",
        color: "white",
      }}
    >
      <Stack
        spacing={8}
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Typography
          variant="h1"
          sx={{
            mt: "calc(1rem + 68.5px)",
            display: { xs: "none", md: "block" },
          }}
        >
          Best Under Pressure...
        </Typography>
        <Typography variant="h6" textOverflow="none">
          Velit voluptate tempor nulla non sint commodo cillum elit exercitation
          ipsum velit. Amet ullamco sunt nulla in ipsum aute ut. Voluptate
          tempor velit in adipisicing Lorem fugiat ipsum aliqua. Minim sunt do
          nulla do laboris eiusmod amet cillum consequat duis dolore ad non
          adipisicing. Dolore qui occaecat ex non dolor aliqua laboris ipsum
          esse est consectetur commodo magna. Irure ipsum ipsum consectetur sunt
          culpa ex enim Lorem eu qui. Labore nulla incididunt nulla eiusmod in
          eiusmod esse.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Hero;
