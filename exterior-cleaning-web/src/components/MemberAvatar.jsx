import React from "react";
import { closeAnchorElUser, setAnchorElUser, toggleSettings } from "../store/slices/avatarSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/loggedInSlice";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'



const MemberAvatar = () => {

const dispatch = useDispatch();

const { persistedData } = useSelector((store) => store.loggedIn);
const { memberData } = useSelector((store) => store.member);
const { anchorElUser, settings } = useSelector((store) => store.avatar);
const name = persistedData.name || memberData.name

const stringAvatar = (name) => {
    const bigName = name?.toUpperCase();
    const arr = bigName.split(' ');

    return {
        children: `${arr[0][0]}${arr[1][0]}`
    }
}

const handleOpen = (e) => {
  dispatch(setAnchorElUser(e.currentTarget))
  dispatch(toggleSettings())
}

const handleClose = () => {
  dispatch(closeAnchorElUser());
  dispatch(toggleSettings());
}

  return (
    <Box>
      <Tooltip title="Open Settings">
        <IconButton aria-label="user-menu" aria-controls='user-menu' onClick={handleOpen}>
        <Avatar {...stringAvatar(name)} />
        </IconButton>
      </Tooltip>
      <Menu id="user-menu" anchorEl={anchorElUser} keepMounted open={settings} onClose={handleClose} 
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} transformOrigin={{vertical: 'bottom', horizontal: 'right'}} sx={{mt: "3.25rem"}}>
        <MenuItem onClick={() => dispatch(logout())}>
          <Typography variant="body1" color="initial" textAlign="center">Account</Typography>
        </MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>
          <Typography variant="body1" color="initial" textAlign="center">Payment</Typography>
        </MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>
          <Typography variant="body1" color="error" textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default MemberAvatar;