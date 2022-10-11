import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { snackClose } from "../../store/slices/snackSlice";

const SnackAlert = () => {
  const dispatch = useDispatch();
  const { isSuccess, isOpen, alertMessage } = useSelector((store) => store.snack);
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      onClose={() => dispatch(snackClose())}
    >
      {isSuccess ? (
        <Alert severity="success" sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      ) : (
        <Alert severity="error" sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      )}
    </Snackbar>
  );
};

export default SnackAlert;
