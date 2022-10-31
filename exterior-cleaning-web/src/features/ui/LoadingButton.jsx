import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const LoadingButton = ({ name, loading, props }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Button {...props} disabled={loading}>
        {name}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            mt: "-12px",
            ml: "-12px",
          }}
        />
      )}
    </Box>
  );
};

export default LoadingButton;
