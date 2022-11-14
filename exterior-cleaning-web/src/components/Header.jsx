import { Fragment, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../app/slices/modalSlice";
import { setCredentials } from "../app/slices/authSlice";
import NavbarPages from "./NavbarPages";
import AppBar from "@mui/material/AppBar";
import HideOnScroll from "../Utilities/HideOnScroll";
import HouseIcon from "@mui/icons-material/House";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import UserNav from "./UserNav";
import SnackAlert from "../features/ui/SnackAlert";
const ModalPopup = lazy(() => import("../features/ui/ModalPopup"));

const iconButtonStyle = {
  display: { xs: "none", sm: "flex", lg: "none" },
};

const fullButtonStyle = {
  mx: 1,
  display: { xs: "none", lg: "flex" },
  maxHeight: "30.75px",
};

const Header = () => {
  const { isLogged } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(
        setCredentials(JSON.parse(sessionStorage.getItem("userStorage")))
      );
    }
  }, [isLogged, dispatch]);

  return (
    <Fragment>
      <HideOnScroll>
        <AppBar
          position="sticky"
          sx={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            m: "0",
            px: "1rem",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Link to={"/"} style={{ color: "inherit" }}>
              <IconButton
                color="inherit"
                size="large"
                sx={{ p: 0, mr: "1rem" }}
              >
                <HouseIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              noWrap
              overflow="none"
              component={Link}
              to={"/"}
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
          <NavbarPages />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
              variant="text"
              endIcon={<EmailIcon />}
              color="secondary"
              size="small"
              sx={fullButtonStyle}
              onClick={() => dispatch(handleOpen("contact"))}
            >
              Contact
            </Button>
            <IconButton
              sx={iconButtonStyle}
              color="secondary"
              onClick={() => dispatch(handleOpen("contact"))}
            >
              <EmailIcon />
            </IconButton>
            <Button
              variant="contained"
              endIcon={<RequestQuoteIcon />}
              color="secondary"
              size="small"
              sx={fullButtonStyle}
              onClick={() => dispatch(handleOpen("quote"))}
            >
              Quote
            </Button>
            <IconButton
              sx={iconButtonStyle}
              color="secondary"
              onClick={() => dispatch(handleOpen("quote"))}
            >
              <RequestQuoteIcon />
            </IconButton>
            <UserNav />
          </Box>
        </AppBar>
      </HideOnScroll>
      <Suspense>
        <ModalPopup />
      </Suspense>
      <SnackAlert />
    </Fragment>
  );
};

export default Header;
