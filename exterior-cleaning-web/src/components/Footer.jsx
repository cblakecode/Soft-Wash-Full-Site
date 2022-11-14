import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { handleOpen } from "../app/slices/modalSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const openModal = (e) => {
    e.preventDefault();
    dispatch(handleOpen("contact"));
  };

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
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link
            href="/"
            underline="hover"
            color="secondary"
            onClick={openModal}
          >
            {"support@exteriorcleaningofsc.com"}
          </Link>
          <Typography color="secondary">843-200-0485</Typography>
        </Grid>
        <Grid
          item
          md={6}
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
