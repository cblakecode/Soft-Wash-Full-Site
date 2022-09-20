import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ height: "auto", py: "2rem", backgroundColor: "primary.main" }}>
      <Grid container spacing={6} rowSpacing={12}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center" color="common.white">
            Exterior Cleaning of SC
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconButton color="secondary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary">
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link href="#" underline="hover" color="secondary">
            {"support@exteriorcleaningofsc.com"}
          </Link>
          <Typography color="secondary">843-200-0485</Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="secondary" textAlign="center">
            Proudly serving the low country for 14+ years!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
