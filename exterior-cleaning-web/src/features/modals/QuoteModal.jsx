import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";
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
  const { activeStep } = useSelector((store) => store.quote);

  return (
    <Box>
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
  );
};

export default QuoteModal;
