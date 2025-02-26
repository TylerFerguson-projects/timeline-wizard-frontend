// layout/Header.tsx
'use client';
import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
  title?: string;
  onMenuClick?:() => void;
  onMobileNavOpen:() => void;
 
}

const Header: React.FC<HeaderProps> = ({ 
  title = "AWS CDK Stack Deployment"

}) => {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Container maxWidth="xl">
        <Toolbar className="justify-between">
          <Box className="flex items-center">
         
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