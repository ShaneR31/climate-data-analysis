import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6">
        Climate Data Analysis Tool
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
