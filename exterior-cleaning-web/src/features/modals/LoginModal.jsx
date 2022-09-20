import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Login from "../modals/membership/Login";
import SignUp from "../modals/membership/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { closeMember } from '../../store/slices/loginSlice';


const LoginModal = () => {

  const {isLoginOpen, isSignUpOpen} = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const open = isLoginOpen || isSignUpOpen;

  return (
    <Box>
        <Modal open={open} onClose={() => dispatch(closeMember())} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box
                sx={{
                backgroundColor: "common.white",
                width: "60%",
                height: "auto",
                borderRadius: "10px",
                p: "1rem",
                }}
            >
                {isLoginOpen && <Login />}
                {isSignUpOpen && <SignUp />}
            </Box>
        </Modal>
    </Box>
  )
}

export default LoginModal;

