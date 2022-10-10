import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PersonalStep from "./signupsteps/PersonalStep";
import AuthStep from "./signupsteps/AuthStep";
import SnackAlert from "../../ui/SnackAlert";
import { useSelector } from "react-redux";

function getStepContent(step) {
  switch(step) {
    case 0:
      return <PersonalStep />
    case 1:
      return <AuthStep />
    default:
      return;
  }
}

const steps = ["User", "Auth"];



const SignUp = () => {

  const {activeStep} = useSelector((store) => store.member);

  return (
    <Box>
      <SnackAlert />
      <Stepper sx={{mb: "1rem"}} activeStep={activeStep}>
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

export default SignUp;
