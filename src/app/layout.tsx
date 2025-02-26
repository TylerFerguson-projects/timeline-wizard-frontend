"use client";
import React, { useState } from "react";
import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MuiThemeProvider from "./components/ThemeProvider";
import MainContainer from "./components/MainContainer";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { usePathname } from "next/navigation";

// Define props for RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
}

// Navigation items
const navigation = [
  { name: "Registration Form", href: "/", icon: <DesignServicesIcon /> },
  { name: "Registration View", href: "/registration-view", icon: <InfoIcon /> },
];

const RootLayout = ({ children }: RootLayoutProps) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const handleNavClose = () => setMobileNavOpen(false);

 
   const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Registration Form";
      case "/registration-view":
        return "Confirm Submission";
      default:
        return "Registration Form";  
    }
  };

  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <CssBaseline />
          <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
            <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            <Box
    sx={{
      width: { xs: "0", md: "240px" },
      flexShrink: 0,
      display: { xs: "none", md: "block" },
    
    }}
  >
    <List>
      {navigation.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton component={Link} href={item.href}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
              <Drawer
                variant="temporary"
                open={mobileNavOpen}
                onClose={handleNavClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": { width: "240px" },
                }}
              >
                <List>
                  {navigation.map((item) => (
                    <ListItem key={item.name} disablePadding>
                      <ListItemButton component={Link} href={item.href}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List> 
              </Drawer>
              <Box sx={{ flexGrow: 1, padding: 3 }}>
                <MainContainer  sx={{ marginBottom: '1rem' }} title={getTitle()}>{children}</MainContainer>
               
              </Box>
            </Box>
            <Footer />
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;