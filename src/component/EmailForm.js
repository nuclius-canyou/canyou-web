import { useState } from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { handleNewEmail } from '../utils'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'

const EmailContainerBox = styled(Box)(({ theme }) => ({
  "& > *": {
    marginBottom: "0.8rem",
  },
  [theme.breakpoints.down('md')]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  "& .main": {
    [theme.breakpoints.down('sm')]: {
      marginRight: "5px",
      marginLeft: "5px",
    },
    "& .email-form": {
      maxWidth: "380px",
      display: "flex",
      alignItems: "stretch",
      marginBottom: "10px",
      "& .MuiFormControl-root": {
        flex: 1,
        minWidth: "180px",
        [theme.breakpoints.up('sm')]: {
          minWidth: "315px",
        },
        "& input": {
          fontSize: "16px",
          [theme.breakpoints.down('sm')]: {
            fontSize: "12px",
          },
        },
      },
      "& > button": {
        background: "#f4173a",
        borderRadius: "0px 6px 6px 0px",
        [theme.breakpoints.up('sm')]: {
          minWidth: "90px"
        },
      },
    },
    "& p": {
      minWidth: "280px",
      maxWidth: "330px",
    }
  }

}))



const EmailForm = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async () => {
    const isValid = validator.isEmail(email)
    setLoading(true)
    try {
      if (email.length == 0) {
        toast.error('🚫 Empty email', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setLoading(false)
        return
      }
      if (!isValid) {
        toast.error('🚫 Please enter a valid email', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setLoading(false)
        return
      }
      await handleNewEmail(email)
      toast.success('🚀 You have been added successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setEmail("")
      setLoading(false)
    } catch (error) {
      toast.error('🚫 Unable to submit email', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setEmail("")
    }
    setLoading(false)
  }

  return (
    <EmailContainerBox >
      <Typography>Get the app when it launches!</Typography>
      <Box className="main">
        <Box className='email-form'>
          <TextField
            type='email'
            className='input-text'
            placeholder='Email Address'
            variant='filled'
            inputProps={{ sx: { backgroundColor: "#fff", borderRadius: "6px 0 0 6px", padding: "10px 15px" } }}
            InputProps={{ disableUnderline: true, sx: { backgroundColor: "#fff", borderRadius: "6px 0 0 6px", boxShadow: 2 } }}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button
            disabled={loading}
            onClick={handleSubmit}
            variant="contained"
            color="error"
            sx={{ boxShadow: 2 }}
          >
            Get It!
          </Button>
        </Box>
        <Typography sx={{ fontSize: '10px', }}>
          By clicking “Get it!”, I acknowledge that I have read the Privacy Policy
          and agree to the Terms of Service.
        </Typography>
      </Box>
      <ToastContainer />
    </EmailContainerBox>
  )
}

export default EmailForm
