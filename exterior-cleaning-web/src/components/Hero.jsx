import { Suspense } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch } from "react-redux";
import { handleOpen } from "../store/slices/modalSlice";
import Image from "../images/yellow-house.png";

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <Paper sx={{ borderRadius: "13px", mt: "1rem" }} elevation={4}>
      <Box
        sx={{
          display: { xs: "flex", lg: "grid" },
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "center",
          backgroundColor: "primary.main",
          maxHeight: "90vh",
          minHeight: "90vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            color="common.white"
            textAlign="center"
            fontSize={{ xs: "11vw", md: "6rem" }}
          >
            Got Mildew!?
          </Typography>
          <Typography
            variant="h5"
            color="common.white"
            textAlign="center"
            fontSize={{ xs: "4vw", md: "2rem" }}
            sx={{ mt: "1rem" }}
          >
            You've Come To The Right Place.
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            endIcon={<RequestQuoteIcon />}
            onClick={() => dispatch(handleOpen("quote"))}
            sx={{
              width: "25%",
              mt: "1rem",
              flexWrap: "nowrap",
              display: { xs: "none", sm: "flex" },
            }}
          >
            Quote
          </Button>
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }, mt: "1rem" }}
            size="large"
            color="secondary"
          >
            <RequestQuoteIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Suspense>
            <Card square elevation={0} sx={{ backgroundColor: "primary.main" }}>
              <CardMedia
                component="img"
                heigth="100%"
                image={Image}
                loading="lazy"
                alt="yellow house"
              />
            </Card>
          </Suspense>
        </Box>
      </Box>
    </Paper>
  );
};

export default Hero;
