import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { handleContactClose } from "../../store/modalSlice";
import { emailPost, handleInputChange } from "../../store/formSlice";

const Modalcontact = () => {
  const { contactOpen } = useSelector((store) => store.modal);
  const { formData } = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailPost(formData));
  };

  const handleChange = (e) => {
    dispatch(handleInputChange({ [e.target.name]: e.target.value }));
  };

  return (
    <Box>
      <Modal
        open={contactOpen}
        onClose={() => dispatch(handleContactClose())}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "common.white",
            width: "50%",
            height: "auto",
            borderRadius: "10px",
            pb: "1rem",
            px: "1rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h4">
                Contact Us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="fullName"
                variant="outlined"
                placeholder="Enter First and Last Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Enter Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="mobile"
                variant="outlined"
                placeholder="ex. 123-456-3489"
                value={formData.mobile}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                placeholder="Send a message"
                value={formData.message}
                onChange={handleChange}
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
