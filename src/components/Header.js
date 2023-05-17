import React from 'react';
import { Typography, Box } from '@mui/material';

function Header() {
  return (
    <header>
      <Typography variant="h4" className="logo">Notice</Typography>
      <nav className="nav">
        <Box component="a" href="/">Home</Box>
        <Box component="a" href="/">Search</Box>
      </nav>
    </header>
  );
}

export default Header;
