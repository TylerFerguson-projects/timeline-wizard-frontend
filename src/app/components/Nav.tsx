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
  { name: "Timeline Generator", href: "/timeline-generator", icon: <DesignServicesIcon /> },
  { name: "Timeline View", href: "/timeline-view", icon: <InfoIcon /> },
];

const Nav = ({ open = false, onClose }: NavProps) => {
  return (
    <>
      <Drawer variant="temporary" open={open} onClose={onClose} ModalProps={{ keepMounted: true }}>
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
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flex: "0 0 240px",
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
    </>
  );
};

export default Nav;