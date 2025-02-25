// layout/MainContainer.tsx
'use client';
import React, { ReactNode } from 'react';
import { Container, Paper, Box, Typography, ContainerProps } from '@mui/material';

interface MainContainerProps {
  children: ReactNode;
  title?: string;
  maxWidth?: ContainerProps['maxWidth'];
  elevation?: number;
  className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ 
  children, 
  title,
  maxWidth = "lg", 
  elevation = 0, 
  className = "" 
}) => {
  return (
    <Container 
      maxWidth={maxWidth} 
      className={`py-6  ${className}`}
    >
      {title && (
        <Typography 
          variant="h4" 
          component="h1" 
          className="mb-6 font-medium text-gray-800"
        >
          {title}
        </Typography>
      )}
      
      <Paper 
        elevation={elevation} 
        className="p-6 bg-white rounded-lg"
      >
        <Box className="min-h-[200px]">
          {children}
        </Box>
      </Paper>
    </Container>
  );
};

export default MainContainer;