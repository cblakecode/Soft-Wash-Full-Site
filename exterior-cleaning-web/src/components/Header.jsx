import  { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import HideOnScroll from "../Utilities/HideOnScroll";
import HouseIcon from "@mui/icons-material/House";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { handleContactOpen } from "../store/slices/modalSlice";
import { handleOpenQuote } from "../store/slices/quoteSlice";
import MemberAvatar from "./MemberAvatar";
import SignUpButton from "./SignUpButton";

const pages = ["About", "Services", "Area"];

const iconButtonStyle = {
  display: { xs: "flex", lg: "none" }
}

const fullButtonStyle = {
  mx: 1, display: { xs: "none", lg: "flex" }, maxHeight: "30.75px",
}

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.loggedIn)


  return (
    <Fragment>
      <HideOnScroll>
        <AppBar position="sticky" sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              m: '0'
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                ml: "1rem",
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
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                mr: "1rem"
              }}
            >
              <Button
                variant="text"
                endIcon={<EmailIcon />}
                color="secondary"
                size="small"
                sx={fullButtonStyle}
                onClick={() => dispatch(handleContactOpen())}
              >
                Contact
              </Button>
              <IconButton
                sx={iconButtonStyle}
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
                sx={fullButtonStyle}
                onClick={() => dispatch(handleOpenQuote())}
              >
                Free Quote
              </Button>
              <IconButton
                sx={iconButtonStyle}
                color="secondary"
                onClick={() => dispatch(handleOpenQuote())}
              >
                <RequestQuoteIcon />
              </IconButton>
              {isLoggedIn ? <MemberAvatar /> : <SignUpButton />}
            </Box>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};

export default Header;
