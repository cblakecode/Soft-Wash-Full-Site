import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../store/api/authApiSlice";
import { logOut } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useGetMemberQuery } from "../store/api/memberApiSlice";
import { apiSlice } from "../store/api/apiSlice";

const MemberAvatar = () => {
  const dispatch = useDispatch();
  const { currentData } = apiSlice.endpoints.getMember.useQueryState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState("John Doe");
  const [logout] = useLogoutMutation();

  useEffect(() => {
    if (currentData?.name) {
      setName(currentData.name);
    }
  }, [currentData]);

  function stringAvatar(name) {
    const bigName = name?.toUpperCase();
    const arr = bigName.split(" ");

    return {
      children: `${arr[0][0]}${arr[1][0]}`,
    };
  }

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOut());
    logout();
  };

  return (
    <Box>
      <Tooltip title="Open Settings">
        <IconButton
          aria-label="user-menu"
          aria-controls="user-menu"
          onClick={handleOpen}
        >
          <Avatar {...stringAvatar(name)} />
        </IconButton>
      </Tooltip>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={{ mt: "3.25rem", ml: "1rem" }}
      >
        <MenuItem component={Link} to={"/account"} onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={"/payment"} onClick={handleClose}>
          <ListItemIcon>
            <PaymentIcon color="success" />
          </ListItemIcon>
          <ListItemText>Payment</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to={"/"} onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MemberAvatar;
