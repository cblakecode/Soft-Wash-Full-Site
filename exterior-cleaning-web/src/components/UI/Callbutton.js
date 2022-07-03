import React from "react";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import blue from "@mui/material/colors/blue";
import Box from "@mui/material/Box";

const Callbutton = (props) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    "&:hover": {
      backgroundColor: blue[700],
    },
  }));

  return (
    <Box
      sx={{
        justifyContent: "center",
      }}
    >
      <ColorButton variant="contained" size="lg">
        {props.title}
      </ColorButton>
    </Box>
  );
};

export default Callbutton;
