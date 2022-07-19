import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HideOnScroll from "../Utilities/HideOnScroll";
import HouseIcon from "@mui/icons-material/House";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const pages = ["About", "Services", "Area"];

const Header = (props) => {
  return (
    <Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexGrow: 1,
              }}
            >
              <IconButton href="/" color="inherit" size="large" sx={{ p: 0 }}>
                <HouseIcon fontSize="inherit" />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                overflow="none"
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", lg: "flex" },
                  flexShrink: 1,
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "common.white",
                  textDecoration: "none",
                }}
              >
                Exterior Cleaning of SC
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexGrow: 2, justifyContent: "center" }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "common.white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="text"
                endIcon={<EmailIcon />}
                color="secondary"
                size="small"
                sx={{ mx: 1, display: { xs: "none", md: "flex" } }}
              >
                Contact
              </Button>
              <Button
                variant="contained"
                endIcon={<RequestQuoteIcon />}
                color="secondary"
                size="small"
                sx={{ mx: 1, display: { xs: "none", md: "flex" } }}
              >
                Free Quote
              </Button>
              <Button
                variant="outlined"
                endIcon={<AccountBoxIcon />}
                color="secondary"
                size="small"
                sx={{ mx: 1, display: { xs: "none", md: "flex" } }}
              >
                Membership
              </Button>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                color="secondary"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                color="secondary"
              >
                <RequestQuoteIcon />
              </IconButton>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                color="secondary"
              >
                <AccountBoxIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
};

export default Header;
