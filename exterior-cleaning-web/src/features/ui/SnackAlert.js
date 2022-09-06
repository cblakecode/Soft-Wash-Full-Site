import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { handleClose } from "../../store/formSlice";

const SnackAlert = ({ successAlert, errorAlert }) => {
  const dispatch = useDispatch();
  const open = successAlert || errorAlert;
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      onClose={() => dispatch(handleClose(open))}
    >
      {successAlert ? (
        <Alert severity="success" sx={{ width: "100%" }}>
          Message Sent!
        </Alert>
      ) : (
        <Alert severity="error" sx={{ width: "100%" }}>
          Message Failed!
        </Alert>
      )}
    </Snackbar>
  );
};

export default SnackAlert;
