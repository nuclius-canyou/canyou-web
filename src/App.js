import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Support from './pages/Support'
import Nav from './component/Nav'
import Footer from './component/Footer'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const AppContainer = styled(Box)(() => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  overflowY: 'hidden',

  '& > .content': {
    flex: 1,
    marginBottom: '30px',
    position: 'relative',
  },
}))

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <AppContainer>
          <Nav />
          <Box className='content'>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/support' element={<Support />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </div>
  )
}

export default App
