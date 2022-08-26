import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { handleQuoteClose } from "../../store/modalSlice";

const QuoteModal = () => {
  const { quoteOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <Box>
      <Modal
        open={quoteOpen}
        onClose={() => dispatch(handleQuoteClose())}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          component="form"
          sx={{
            backgroundColor: "common.white",
            width: "50%",
            height: "auto",
            borderRadius: "10px",
            p: "1rem",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4" textAlign="center">
                Free Quote
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="p">
                Fill out the form below and we will get back to you as soon as
                we can. Thank you for your business!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="First"
                type="text"
                placeholder="ex. John"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Last"
                placeholder="ex. Doe"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Phone"
                placeholder="Enter Your Mobile Number"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                placeholder="Enter Your Email Address"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Property Address"
                placeholder="ex. 123 Cleaning St, Mount Pleasant"
                required
                fullWidth
              />
            </Grid>
            <Grid item container columnSpacing={1} justifyContent="flex-end">
              <Grid item>
                <Button onClick={() => dispatch(handleQuoteClose())}>
                  Close
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default QuoteModal;
