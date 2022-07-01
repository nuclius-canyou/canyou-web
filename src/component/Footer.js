import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'

const StyledFooter = styled('footer')(({ theme }) => ({
  marginTop: "10px",
  paddingBottom: "10px",

  "& .MuiGrid-container.footer_container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 1.2rem",
    gap: "20px",
    marginBottom: "10px",
    "& .MuiGrid-item": {
      "&>a": {
        padding: "0px 5px"
      }
    }
  },


}))

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container className='footer_container'>
        <Grid item order={{ xs: 4, sm: 1, md: 1 }}>
          <Link className='link' to='/'>
            CanYou Inc. &copy; 2022
          </Link>
        </Grid>
        <Grid item order={{ xs: 1, sm: 2, md: 2 }}>
          <a className='link' href='mailto:support@canyouapp.com'>
            Support
          </a>
        </Grid>
        <Grid item order={{ xs: 2, sm: 3, md: 3 }}>
          <Link className='link' to='/terms'>
            Terms
          </Link>
        </Grid>
        <Grid item order={{ xs: 3, sm: 4, md: 4 }}>
          <Link className='link' to='/privacy'>
            Privacy
          </Link>
        </Grid>
      </Grid>
    </StyledFooter >
  )
}

export default Footer
