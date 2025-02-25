// layout/Header.tsx
'use client';
import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
  title?: string;
 
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Timeline Wizard"

}) => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Container maxWidth="xl">
        <Toolbar className="justify-between">
          <Box className="flex items-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className="mr-2 md:hidden"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="font-bold tracking-tight"
            >
              {title}
            </Typography>
          </Box>
          
    
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;