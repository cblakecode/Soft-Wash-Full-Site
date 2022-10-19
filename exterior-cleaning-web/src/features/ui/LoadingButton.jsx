import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'

const LoadingButton = (props) => {
    const { isLoading } = useSelector((store) => store.member)
  return (
    <Box sx={{position: "relative"}}>
        <Button {...props} disabled={isLoading}>
          {props.name}
        </Button>
        {isLoading && (<CircularProgress size={24} sx={{position: "absolute", top: "50%", left: "50%", mt: "-12px", ml: "-12px"}} />)}
    </Box>
  )
}

export default LoadingButton