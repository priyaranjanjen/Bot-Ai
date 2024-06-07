/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Outlet } from 'react-router-dom';
// import './App.css';
import { Grid } from '@mui/material';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          background:
            "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            bgcolor: 'primary.light',
            "@media (max-width: 800px)": {
              width: '75%', // Adjust width for better mobile view
              transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 400ms ease-in-out',
            },
          }}
          position={{ md: 'relative', xs: 'fixed' }}
          zIndex={{ xs: 9999, md: 1 }}
          height={'100vh'}
        >
          <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
        >
          <Outlet context={{ chat, setChat, handleMobileMenu: setMenuOpen }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
