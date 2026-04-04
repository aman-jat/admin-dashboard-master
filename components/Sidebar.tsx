"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import GroupIcon from "@mui/icons-material/Group";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon fontSize="small" />, href: "/" },
  { label: "Inventory", icon: <Inventory2Icon fontSize="small" />, href: "/inventory" },
  { label: "Orders", icon: <ShoppingBagIcon fontSize="small" />, href: "/orders" },
  { label: "Customers", icon: <GroupIcon fontSize="small" />, href: "/customers" },
  { label: "Analytics", icon: <InsightsIcon fontSize="small" />, href: "/analytics/product-performance" },
  { label: "Marketing", icon: <AutoAwesomeIcon fontSize="small" />, href: "/marketing" },
];

const bottomItems = [
  { label: "Support", icon: <HelpCenterIcon fontSize="small" />, href: "/support" },
  { label: "Logout", icon: <LogoutIcon fontSize="small" />, href: "/logout" },
];

type SidebarProps = {
  activeHref?: string;
};

export default function Sidebar({ activeHref }: SidebarProps) {
  const pathname = usePathname();
  const active = activeHref ?? pathname;

  return (
    <Box
      sx={{
        width: 220,
        minHeight: "100vh",
        bgcolor: "background.paper",
        borderRight: "1px solid rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        py: 2,
        px: 1.5,
        flexShrink: 0,
      }}
    >
      {/* Brand */}
      <Box sx={{ px: 1.5, mb: 2.5 }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 800, letterSpacing: "0.12em", fontSize: "0.875rem", color: "text.primary" }}
        >
          THE ATELIER
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary", letterSpacing: "0.06em" }}>
          PREMIUM MANAGEMENT
        </Typography>
      </Box>

      {/* Nav */}
      <List dense disablePadding sx={{ flexGrow: 1 }}>
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.9,
                  "&.Mui-selected": {
                    bgcolor: "#FEF2F2",
                    color: "primary.main",
                    "& .MuiListItemIcon-root": { color: "primary.main" },
                    "&:hover": { bgcolor: "#FEE2E2" },
                  },
                  "&:hover": { bgcolor: "#F8F7F5" },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 34,
                    color: isActive ? "primary.main" : "text.secondary",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* New Collection CTA */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        fullWidth
        sx={{ mb: 2, py: 1.1, fontWeight: 600, fontSize: "0.875rem" }}
      >
        New Collection
      </Button>

      <Divider sx={{ mb: 1 }} />

      {/* Bottom nav */}
      <List dense disablePadding>
        {bottomItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ borderRadius: 2, px: 1.5, py: 0.9, "&:hover": { bgcolor: "#F8F7F5" } }}
            >
              <ListItemIcon sx={{ minWidth: 34, color: "text.secondary" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: "0.875rem", color: "text.secondary" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
