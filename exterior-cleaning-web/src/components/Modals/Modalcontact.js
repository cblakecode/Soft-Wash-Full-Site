import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";

const Modalcontact = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="text"
        endIcon={<EmailIcon />}
        color="secondary"
        size="small"
        sx={{ mx: 1, display: { xs: "none", lg: "flex" } }}
        onClick={handleOpen}
      >
        Contact
      </Button>
      <IconButton
        sx={{ display: { xs: "flex", lg: "none" } }}
        color="secondary"
      >
        <EmailIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "common.white",
            width: "50%",
            height: "auto",
            borderRadius: "10px",
            pb: "1rem",
            pr: "1rem",
          }}
        >
          <Grid item xs={12}>
            <Typography textAlign="center" variant="h4">
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              placeholder="Enter Full Name"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              placeholder="Enter Your Email"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              placeholder="Send a message"
              rows={4}
              multiline
              required
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button variant="text" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained">Send</Button>
          </Grid>
        </Grid>
      </Modal>
    </Box>
  );
};

export default Modalcontact;
