import React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useDispatch } from "react-redux";
import { toggleIsOpen } from "../store/slices/memberSlice";
import IconButton from "@mui/material/IconButton";


const SignUpButton = () => {

const dispatch = useDispatch();



   return ( 
    <Box>
        <Button
        variant="outlined"
        endIcon={<AccountBoxIcon />}
        color="secondary"
        size="small"
        sx={{ mx: 1, display: { xs: "none", lg: "flex" } }}
        onClick={() => dispatch(toggleIsOpen())}
        >
        Membership
        </Button>
        
        <IconButton
        sx={{ display: { xs: "flex", lg: "none" } }}
        color="secondary"
        onClick={() => dispatch(toggleIsOpen())}
        >
        <AccountBoxIcon />
        </IconButton>
    </Box>
   );
}

export default SignUpButton;