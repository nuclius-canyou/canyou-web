import AppImage from '../assets/app.png'
import Play from '../assets/play.png'
import Apple from '../assets/apple.png'
import { styled } from '@mui/material/styles'
import { Box, Container, Grid, Typography } from '@mui/material'

const MuiContainer = styled(Container)(({ theme }) => ({
  marginTop: "10px",
  marginBottom: "4%",

  "& .MuiGrid-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: "0px",
    height: "100%",
  },

  "& .pic": {
    position: "relative",
    height: "630px",
    width: "320px",
    marginLeft: 'auto',
    marginRight: '20px',
    [theme.breakpoints.down("md")]: {
      marginRight: 'auto',
    },
    [theme.breakpoints.down("sm")]: {
      height: 550,
      width: 260,
    },
    "&>img": {
      position: "absolute",
      width: "100%",
      height: "100%",
    }
  },
  "& .landing_content": {
    "&>*": {
      marginBottom: "10px",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    "& .main_heading ": {
      margin: "1rem 0px",
      "& > .MuiTypography-root": {
        fontSize: "64px",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
          fontSize: "48px",
        },
      },
    },
    "& .main_text ": {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        gap: "0px",
      },
      "& > .MuiTypography-root": {
        fontSize: "36px",
        fontWeight: "bold",
        minWidth: "200px",
        [theme.breakpoints.down("md")]: {
          fontSize: "32px",
          textAlign: "center",
        },
      },
    },

    "& .appStore": {
      marginTop: "50px",
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        marginTop: "20px",
        gap: "20px",
      },
      "&>img:first-of-type": {
        [theme.breakpoints.up("md")]: {
          marginLeft: "-10px"
        }
      },
    },

  }

}))

const Landing = () => {
  return (
    <MuiContainer>
      <Grid container spacing={2}>
        <Grid item
          xs={12} sm={12} md={6}
          order={{ xs: 2, sm: 2, md: 1 }}
        >
          <div className="pic">
            <img src={AppImage} alt='app image' />
          </div>
        </Grid>
        <Grid item
          xs={12} sm={12} md={6}
          order={{ xs: 1, sm: 1, md: 2 }}
        >
          <div className='landing_content'>
            <Box className='main_heading'>
              <Typography variant='h1'>Try CanYou.</Typography>
            </Box>
            <Box className="main_text">
              <Typography>Less Texts.</Typography>
              <Typography>More Tasks.</Typography>
            </Box>
            <Box className='appStore'>
              <img src={Play} alt='Google Play' />
              <img src={Apple} alt='Apple Store' />
            </Box>
          </div>
        </Grid>

      </Grid>
    </MuiContainer>
  )
}

export default Landing
