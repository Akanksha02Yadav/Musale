import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
// import Logo from '../logo.svg';

const Navbar = () => {
  const location = useLocation();
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffff' }}>
    <Toolbar>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'black' }}>
          {/* <img src={Logo} alt="Logo" style={{ height: '50px' }} /> */}
          MUSALE
        </Typography>
        <Stack direction="row" spacing={8} sx={{color: 'black'}}>
          {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
          <Button color="inherit" component={Link} to="/carrier" sx={{ backgroundColor: location.pathname === '/carrier' ? 'secondary.main' : 'inherit' }}>Carrier</Button>
            <Button color="inherit" component={Link} to="/about" sx={{ backgroundColor: location.pathname === '/about' ? 'secondary.main' : 'inherit' }}>About Us</Button>
            <Button color="inherit" component={Link} to="/events" sx={{ backgroundColor: location.pathname === '/events' ? 'secondary.main' : 'inherit' }}>Events</Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ backgroundColor: location.pathname === '/contact' ? 'secondary.main' : 'inherit' }}>Contact Us</Button>
        </Stack>
      </Stack>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;
