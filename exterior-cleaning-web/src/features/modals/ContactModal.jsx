import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { handleClose } from "../../app/slices/modalSlice";
import sendContact from "../../app/actions/sendContact";
import LoadingButton from "../ui/LoadingButton";

const Modalcontact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendContact(data));
    setData({ name: "", email: "", mobile: "", message: "" });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography textAlign="center" variant="h4">
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            placeholder="Enter First and Last Name"
            value={data.name}
            onChange={handleChange}
            autoComplete="off"
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
            value={data.email}
            onChange={handleChange}
            autoComplete="off"
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
            value={data.mobile}
            onChange={handleChange}
            autoComplete="off"
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
            value={data.message}
            onChange={handleChange}
            rows={4}
            multiline
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="text"
            size="large"
            onClick={() => dispatch(handleClose())}
          >
            Close
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <LoadingButton name="Send" variant="contained" type="submit" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Modalcontact;
