import { Box, Typography } from '@mui/material'

const EmailForm = () => {
  return (
    <Box sx={{ width: '500px' }}>
      <Typography>Get the app when it launches!</Typography>
      <Box className='email-form'>
        <input type='email' placeholder='Email Address' />
        <button>Get It!</button>
      </Box>
      <Typography sx={{ fontSize: '10px', width: '300px' }}>
        By clicking “Get it!”, I acknowledge that I have read the Privacy Policy
        and agree to the Terms of Service.
      </Typography>
    </Box>
  )
}

export default EmailForm
