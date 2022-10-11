import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { handleDataChange, toggleIsClosed, prevStep, handleConfirmChange, showPassword} from '../../../../store/slices/memberSlice';
import { signUpMember } from '../../../../store/actions/memberCRUD';



const AuthStep = () => {
  const dispatch = useDispatch();
  const { memberData, confirmPass, togglePassView } = useSelector((store) => store.member);

  const handleChange = (e) => {
    dispatch(handleDataChange({[e.target.name]: e.target.value}))
  }

  const handleClose = () => {
    dispatch(toggleIsClosed());
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpMember(memberData))
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant='h4' textAlign="center" sx={{mb: '1rem'}}>Create Username and Password</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField label="Enter Username" name='username' value={memberData.username} inputProps={{minLength: '6', maxLength: '12'}} onChange={handleChange} required fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Enter Password" type={togglePassView ? 'text' : 'password'} name='password' value={memberData.password} onChange={handleChange} InputProps={{pattern: '^\\w{8,12}$', endAdornment: (<InputAdornment position="end"><IconButton aria-label='toggle password visibility' onClick={() => dispatch(showPassword())} onMouseDown={handleMouseDown} edge='end'>{togglePassView ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton></InputAdornment>) }} required fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Confirm Password" name='confirmPass' type={togglePassView ? 'text' : 'password'} value={confirmPass} onChange={(e) => dispatch(handleConfirmChange(e.target.value))} InputProps={{ pattern: `^${memberData.password}$`, endAdornment: (<InputAdornment position="end"><IconButton aria-label='toggle password visibility' onClick={() => dispatch(showPassword())} onMouseDown={handleMouseDown} edge='end'>{togglePassView ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton></InputAdornment>)}} InputLabelProps={{shrink: true}} required fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <Button variant='outlined' onClick={handleClose}>Close</Button>
        </Grid>
          <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button type='button' onClick={() => dispatch(prevStep())}>Prev</Button>
            <Button type='submit' variant='contained'>Submit</Button>
          </Grid>
      </Grid>
    </Box>
  )
}

export default AuthStep