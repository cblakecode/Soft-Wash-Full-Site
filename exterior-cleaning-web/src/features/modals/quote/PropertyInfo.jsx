import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import { handleClose } from "../../../app/slices/modalSlice";
import {
  nextActiveStep,
  prevActiveStep,
  changePropertyValues,
  calculateQuote,
} from "../../../app/slices/quoteSlice";

const PropertyInfo = () => {
  const [propertyData, setPropertyData] = useState({
    squareFeet: "",
    date: "",
    siding: "vinyl",
    time: "",
    techQuote: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(changePropertyValues(propertyData));
    dispatch(calculateQuote());
    dispatch(nextActiveStep());
  };

  const handleChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center">
            Property Info
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "none", lg: "flex" }, justifyContent: "center" }}
        >
          <Typography textAlign="center" variant="p">
            A little information about the property.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enter Property Sqft"
            name="squareFeet"
            value={propertyData.squareFeet}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 4,
              minLength: 2,
              max: "3000",
              min: "50",
            }}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            onChange={handleChange}
            label="Siding Material"
            name="siding"
            value={propertyData.siding}
            required
          >
            <MenuItem value="vinyl">Vinyl</MenuItem>
            <MenuItem value="brick">Brick</MenuItem>
            <MenuItem value="stucco">Stucco</MenuItem>
            <MenuItem value="hardy plank">Hardy Plank</MenuItem>
          </TextField>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <DatePicker
              label="Preferred Clean Date"
              renderInput={(params) => (
                <TextField {...params} required fullWidth />
              )}
              value={propertyData.date}
              onChange={(newValue) => {
                setPropertyData({
                  ...propertyData,
                  date: new Date(newValue),
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Preferred Clean Time Range"
              name="time"
              value={propertyData.time}
              onChange={handleChange}
              select
              required
              fullWidth
            >
              <MenuItem value="8:00am-12:00pm">Morning (8am-12pm)</MenuItem>
              <MenuItem value="12:00pm-5:00pm">Afternoon (12pm-5pm)</MenuItem>
              <MenuItem value="8:00am-5:00pm">Anytime (8am-5pm)</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Additional items to be quoted on site by service tech"
            placeholder="ex. back patio, driveway, balcony, etc."
            name="techQuote"
            value={propertyData.techQuote}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={() => dispatch(handleClose())}>
            Close
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
        >
          <Button type="button" onClick={() => dispatch(prevActiveStep())}>
            Prev
          </Button>
          <Button variant="contained" type="submit">
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyInfo;
