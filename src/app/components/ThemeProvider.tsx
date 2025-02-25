'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeProviderProps {
  children: ReactNode;
}

export const MuiThemeProvider = ({ children }: ThemeProviderProps) => {
  // Create a custom theme with your preferred colors
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5', // Indigo
        light: '#757de8',
        dark: '#002984',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f50057', // Pink
        light: '#ff5983',
        dark: '#bb002f',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#333333',
        secondary: '#666666',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#3f51b5', // Match primary color
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            margin: '2px 8px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};