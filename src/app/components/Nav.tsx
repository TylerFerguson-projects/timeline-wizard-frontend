"use client";
import React from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavProps {
  open?: boolean;
  onClose: () => void;
}

const navigation: NavItem[] = [
 
  { name: "Timeline Generator", href: "/timeline-generator", icon: <InfoIcon /> },
  { name: "Timeline View", href: "/timeline-view", icon: <DesignServicesIcon /> },
];

const Nav = ({ open = false, onClose }: NavProps) => {
  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose} className="md:hidden">
        <Box className="w-64">
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
      </Drawer>
      <Box className="hidden md:block w-64 border-r border-gray-200 h-full">
        <List className="pt-2">
          {navigation.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                className="hover:bg-blue-50"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Nav;