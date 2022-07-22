import { useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { handleNewEmail } from '../utils'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'

const EmailForm = () => {
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()

  const handleSubmit = async () => {
    const isValid = validator.isEmail(emailRef.current.value)
    setLoading(true)
    try {
      if (emailRef.current.value.length == 0) {
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
      await handleNewEmail(emailRef.current.value)
      toast.success('🚀 You have been added successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      emailRef.current.value = ''
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
      emailRef.current.value = ''
    }
    setLoading(false)
  }

  return (
    <Box sx={{ width: '500px' }}>
      <Typography>Get the app when it launches!</Typography>
      <Box className='email-form'>
        <input
          type='email'
          className='input-text'
          ref={emailRef}
          placeholder='Email Address'
        />
        <button disabled={loading} onClick={handleSubmit}>
          Get It!
        </button>
      </Box>
      <Typography sx={{ fontSize: '10px', width: '300px' }}>
        By clicking “Get it!”, I acknowledge that I have read the Privacy Policy
        and agree to the Terms of Service.
      </Typography>
      <ToastContainer />
    </Box>
  )
}

export default EmailForm
