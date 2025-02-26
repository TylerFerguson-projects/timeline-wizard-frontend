// layout/Header.tsx
'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
  onMobileNavOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "AWS CDK Stack Deployment",
  onMobileNavOpen
}) => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#161d26' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMobileNavOpen}
          sx={{ position: 'absolute', left: 16, display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;