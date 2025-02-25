"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./layout/header/Header";
import Nav from "./layout/nav/Nav";
import Footer from "./layout/footer/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  

  return (
    <html lang="en">
      <body>
        <Box className="min-h-screen flex flex-col">
          <Header title="Timeline Wizard"/>
          <Box className="flex flex-grow">
            <Nav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
            <Box className="flex-grow flex flex-col">
              {children}
              <Footer />
            </Box>
          </Box>
        </Box>
      </body>
    </html>
  );
};

export default RootLayout;