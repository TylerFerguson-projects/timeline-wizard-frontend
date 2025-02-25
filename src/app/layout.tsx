'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { MuiThemeProvider } from './components/ThemeProvider';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleNavClose = () => {
    setMobileNavOpen(false);
  };

  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <Box className="min-h-screen flex flex-col">
            <Header 
              title="Timeline Wizard" 
              onMenuClick={() => setMobileNavOpen(true)}
            />
            <Box className="flex flex-grow">
              <Nav open={mobileNavOpen} onClose={handleNavClose} />
              <Box className="flex-grow flex flex-col">
                {children}
                <Footer />
              </Box>
            </Box>
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;