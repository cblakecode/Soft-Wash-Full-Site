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
import LoadingButton from '../../../ui/LoadingButton';
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
          <TextField label="Enter Username (must be 6-12 characters long)" name='username' value={memberData.username} inputProps={{minLength: '6', maxLength: '12'}} onChange={handleChange} required fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Enter Password (must be 8-12 characters long. Cannot contain any special characters)" type={togglePassView ? 'text' : 'password'} name='password' value={memberData.password} onChange={handleChange} InputProps={{minLength: '8', maxLength: '12', pattern: '^\\w{8,12}$', endAdornment: (<InputAdornment position="end"><IconButton aria-label='toggle password visibility' onClick={() => dispatch(showPassword())} onMouseDown={handleMouseDown} edge='end'>{togglePassView ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton></InputAdornment>) }} required fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Confirm Password" name='confirmPass' type={togglePassView ? 'text' : 'password'} value={confirmPass} onChange={(e) => dispatch(handleConfirmChange(e.value))} InputProps={{pattern: `^${memberData.password}$`, endAdornment: (<InputAdornment position="end"><IconButton aria-label='toggle password visibility' onClick={() => dispatch(showPassword())} onMouseDown={handleMouseDown} edge='end'>{togglePassView ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton></InputAdornment>)}} InputLabelProps={{shrink: true}} required fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <Button variant='outlined' onClick={handleClose}>Close</Button>
        </Grid>
          <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button type='button' onClick={() => dispatch(prevStep())}>Prev</Button>
            <LoadingButton type="submit" name="Sign In" variant="contained" />
          </Grid>
      </Grid>
    </Box>
  )
}

export default AuthStep