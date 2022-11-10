import React from "react";
import Box from "@mui/material/Box";
import SignUp from "./membership/SignUp";
import Login from "./membership/Login";
import { useSelector } from "react-redux";

const MembersModal = () => {
  const { isLogin } = useSelector((store) => store.modal);

  return <Box>{isLogin ? <Login /> : <SignUp />}</Box>;
};

export default MembersModal;
