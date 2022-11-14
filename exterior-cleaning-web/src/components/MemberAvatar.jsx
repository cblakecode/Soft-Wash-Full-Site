import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../app/api/authApiSlice";
import { logOut } from "../app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useGetMemberQuery } from "../app/api/memberApiSlice";

const MemberAvatar = () => {
  const dispatch = useDispatch();
  const { username, name: memberName } = useSelector(
    (store) => store.auth.user
  );
  const { userName } = useGetMemberQuery(username, {
    selectFromResult: ({ data }) => ({
      userName: data?.name,
    }),
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [logout] = useLogoutMutation();

  const name = userName || memberName || "John Doe";

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
