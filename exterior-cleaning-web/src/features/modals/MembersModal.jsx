import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SignUp from "./membership/SignUp";
import Login from "./membership/Login";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsClosed } from "../../store/slices/memberSlice";

const MembersModal = () => {

  const { isOpen, isLoginOpen, isSignUpOpen } = useSelector((store) => store.member);
  const dispatch = useDispatch();

  return (
    <Box>
        <Modal open={isOpen} onClose={() => dispatch(toggleIsClosed())} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box
                sx={{
                backgroundColor: "common.white",
                width: "60%",
                height: "auto",
                borderRadius: "10px",
                p: "1rem",
                }}
            >
              {(isLoginOpen && <Login />) || (isSignUpOpen && <SignUp />)}
            </Box>
        </Modal>
    </Box>
  )
}

export default MembersModal;

