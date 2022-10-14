import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";



const MemberAvatar = () => {

const { loginData } = useSelector((store) => store.loggedIn);
const { memberData } = useSelector((store) => store.member);
const name = loginData.name || memberData.name

const stringAvatar = (name) => {
    const bigName = name?.toUpperCase();
    const arr = bigName.split(' ');

    return {
        children: `${arr[0][0]}${arr[1][0]}`
    }
}



  return (
    <Box>
        <Avatar {...stringAvatar(name)} />
    </Box>
  )
}

export default MemberAvatar;