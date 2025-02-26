'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#161d26',  
      paper: '#101010', 
      
    },
    text: {
      primary: '#ededed',
    }
 
  },
});


interface Props {
  children: React.ReactNode;
}

const MuiThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={darkTheme}>
    {children}
  </ThemeProvider>
);

export default MuiThemeProvider;
