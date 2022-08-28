import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { handleContactClose } from "../../store/modalSlice";

const Modalcontact = () => {
  const { contactOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Modal
        open={contactOpen}
        onClose={() => dispatch(handleContactClose())}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box component="form" onSubmit={handleSubmit}>
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
                type="email"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                variant="outlined"
                placeholder="Enter Your Phone Number"
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
              <Button
                variant="text"
                size="large"
                onClick={() => dispatch(handleContactClose())}
              >
                Close
              </Button>
              <Button variant="contained" size="large" type="submit">
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Modalcontact;
