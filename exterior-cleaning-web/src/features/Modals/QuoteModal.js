import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SnackAlert from "../ui/SnackAlert";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseQuote } from "../../store/slices/quoteSlice";
import ClientInfo from "./quote/ClientInfo";
import PropertyInfo from "./quote/PropertyInfo";
import QuoteOverview from "./quote/QuoteOverview";

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ClientInfo />;
    case 1:
      return <PropertyInfo />;
    case 2:
      return <QuoteOverview />;
    default:
      return;
  }
}

const steps = ["Personal Info", "Property Info", "Quote Overview"];

const QuoteModal = () => {
  const { isOpen, activeStep, isSuccess, isError } = useSelector(
    (store) => store.quote
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <SnackAlert />
      <Modal
        open={isOpen}
        onClose={() => dispatch(handleCloseQuote())}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "common.white",
            width: "60%",
            height: "auto",
            borderRadius: "10px",
            p: "1rem",
          }}
        >
          <Stepper sx={{ mb: "1rem" }} activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {getStepContent(activeStep)}
        </Box>
      </Modal>
    </Box>
  );
};

export default QuoteModal;
