import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useDispatch } from "react-redux";
import { handleOpen } from "../app/slices/modalSlice";
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
        onClick={() => dispatch(handleOpen("member"))}
      >
        Membership
      </Button>

      <IconButton
        sx={{ display: { xs: "flex", lg: "none" } }}
        color="secondary"
        onClick={() => dispatch(handleOpen("member"))}
      >
        <AccountBoxIcon />
      </IconButton>
    </Box>
  );
};

export default SignUpButton;
