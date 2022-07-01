
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Logo from '../assets/logo.png'

const StyledNav = styled('nav')(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 3rem",
  // border: "1px solid black",

  [theme.breakpoints.down("sm")]: {
    padding: "1rem 2rem",
  },

  "& > .logo": {
    height: 120,
    width: 160,
    marginTop: "1.5rem",
    position: "relative",
    "& img": {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: 100,
      width: 140,
    },
  },

  "& .support_link": {
    marginTop: "-10px",
    "& > a": {
      fontSize: "28px",
      transition: "all 0.4s ease",
      color: "white",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    }
  }

}))


const Nav = () => {
  return (
    <StyledNav>
      <Box className="logo">
        <img src={Logo} />
      </Box>
      <Box className="support_link">
        <a href='mailto:support@canyouapp.com'>
          Support
        </a>
      </Box>
    </StyledNav>
  )
}

export default Nav
