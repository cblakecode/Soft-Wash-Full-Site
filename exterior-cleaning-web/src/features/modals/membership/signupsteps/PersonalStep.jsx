import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import React from 'react'
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { handleDataChange, toggleIsClosed, loginOpen, nextStep } from '../../../../store/slices/memberSlice';


const PersonalStep = () => {
    
const { memberData: {name, email, phone, address} } = useSelector((store) => store.member);
const dispatch = useDispatch();

const handleChange = (e) => {
    dispatch(handleDataChange({[e.target.name]: e.target.value}))
};


const handleLogin = () => {
    dispatch(loginOpen())
}

const handleClose = () => {
    dispatch(toggleIsClosed())
}

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(nextStep())
}

  return (
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h3" textAlign="center" sx={{mb: "1rem"}}>Sign Up</Typography>
                <Typography variant="h5" textAlign="center">Please fill out form below</Typography>
                <Stack spacing={4} sx={{mt: "1rem"}}>
                    <TextField required name="name" label="Enter First and Last Name" value={name} onChange={handleChange} inputProps={{pattern: '^\\D+\\s\\D+$'}} />
                    <TextField required name="phone" placeholder='ex. 1234567891' inputProps={{pattern: '^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$'}} label="Enter Mobile Number" value={phone} onChange={handleChange} />
                    <TextField required name="email" type="email" label="Enter Valid Email" value={email} onChange={handleChange}  />
                    <TextField required name="address" label="Enter Property Address (ex. 123 Cleaning st, Mount Pleasant 29486)" value={address} onChange={handleChange} inputProps={{pattern: '^\\d+\\s\\w+[, ]\\D+\\s\\d{5,6}$'}} />
                    <Grid container>
                        <Grid item xs={6}>
                            <Button variant='outlined' onClick={handleClose}>Close</Button>
                        </Grid>
                        <Grid item xs={6} sx={{display: "flex", justifyContent: "flex-end", columnGap: "1rem"}}>
                            <Button size='large' onClick={handleLogin}>Login</Button>
                            <Button variant='contained' type='submit'>Next</Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
    )
}

export default PersonalStep;