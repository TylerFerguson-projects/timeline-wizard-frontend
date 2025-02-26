"use client";
import React, { ReactNode } from "react";
import { Container, Paper, Box, Typography, ContainerProps, SxProps, Theme } from "@mui/material";

interface MainContainerProps {
  children: ReactNode;
  title?: string;
  maxWidth?: ContainerProps["maxWidth"];
  elevation?: number;
  className?: string;
  sx?: SxProps<Theme>;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  title,
  maxWidth = "lg",
  elevation = 0,
  className = "",
  sx = {},
}) => {
  return (
    <Container 
      maxWidth={maxWidth} 
      className={`py-6 ${className}`} 
      sx={{ height: "80%", ...sx }}
    >
      {title && (
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "medium", color: "text.primary", mb: 2 }}
        >
          {title}
        </Typography>
      )}
      <Paper
        elevation={elevation}
        sx={{ 
          p: 6, 
          bgcolor: "background.paper", 
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column" 
        }}
      >
        <Box sx={{ flexGrow: 1, minHeight: "200px" }}>{children}</Box>
      </Paper>
    </Container>
  );
};

export default MainContainer;