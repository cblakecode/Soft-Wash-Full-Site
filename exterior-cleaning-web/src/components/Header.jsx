import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HideOnScroll from "../Utilities/HideOnScroll";
import HouseIcon from "@mui/icons-material/House";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { handleContactOpen } from "../store/slices/modalSlice";
import { handleOpenQuote } from "../store/slices/quoteSlice";
import { toggleLogin } from "../store/slices/loginSlice";

const pages = ["About", "Services", "Area"];

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar
            disableGutters
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              mx: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <IconButton
                href="/"
                color="inherit"
                size="large"
                sx={{ p: 0, mr: "1rem" }}
              >
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
                display: "flex",
                justifyContent: { xs: "flex-start", lg: "flex-end" },
                flexDirection: { xs: "row-reverse", lg: "row" },
              }}
            >
              <Button
                variant="text"
                endIcon={<EmailIcon />}
                color="secondary"
                size="small"
                sx={{ mx: 1, display: { xs: "none", lg: "flex" } }}
                onClick={() => dispatch(handleContactOpen())}
              >
                Contact
              </Button>
              <IconButton
                sx={{ display: { xs: "flex", lg: "none" } }}
                color="secondary"
                onClick={() => dispatch(handleContactOpen())}
              >
                <EmailIcon />
              </IconButton>
              <Button
                variant="contained"
                endIcon={<RequestQuoteIcon />}
                color="secondary"
                size="small"
                sx={{ mx: 1, display: { xs: "none", lg: "flex" } }}
                onClick={() => dispatch(handleOpenQuote())}
              >
                Free Quote
              </Button>
              <IconButton
                sx={{ display: { xs: "flex", lg: "none" } }}
                color="secondary"
                onClick={() => dispatch(handleOpenQuote())}
              >
                <RequestQuoteIcon />
              </IconButton>
              <Button
                variant="outlined"
                endIcon={<AccountBoxIcon />}
                color="secondary"
                size="small"
                sx={{ mx: 1, display: { xs: "none", lg: "flex" } }}
                onClick={() => dispatch(toggleLogin())}
              >
                Membership
              </Button>

              <IconButton
                sx={{ display: { xs: "flex", lg: "none" } }}
                color="secondary"
                onClick={() => dispatch(toggleLogin())}
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
