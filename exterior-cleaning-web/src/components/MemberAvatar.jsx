import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../store/actions/memberCRUD";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from "@mui/material/Divider"
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const MemberAvatar = () => {
const [anchorEl, setAnchorEl] = useState(null);
const dispatch = useDispatch();

const { persistedData } = useSelector((store) => store.loggedIn);
const { memberData } = useSelector((store) => store.member);
const name = persistedData.name || memberData.name

const stringAvatar = (name) => {
    const bigName = name?.toUpperCase();
    const arr = bigName.split(' ');

    return {
        children: `${arr[0][0]}${arr[1][0]}`
    }
}

const handleOpen = (e) => {
  setAnchorEl(e.currentTarget);
}

const handleClose = () => {
  setAnchorEl(null);
}

  return (
    <Box>
      <Tooltip title="Open Settings">
        <IconButton aria-label="user-menu" aria-controls='user-menu' onClick={handleOpen}>
        <Avatar {...stringAvatar(name)} />
        </IconButton>
      </Tooltip>
      <Menu id="user-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} 
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} transformOrigin={{vertical: 'bottom', horizontal: 'right'}} sx={{mt: "3.25rem", ml: "1rem"}}>
        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <PaymentIcon color="success"/>
          </ListItemIcon>
          <ListItemText>Payment</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(logout())}>
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default MemberAvatar;