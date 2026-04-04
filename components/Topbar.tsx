"use client";

import {
  Box,
  InputBase,
  IconButton,
  Avatar,
  Badge,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

type TopbarProps = {
  searchPlaceholder?: string;
  userName?: string;
};

export default function Topbar({
  searchPlaceholder = "Search analytics...",
  userName = "Aapki Pooja",
}: TopbarProps) {
  return (
    <Box
      sx={{
        height: 60,
        bgcolor: "background.paper",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        px: 3,
        gap: 2,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Search */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#F8F7F5",
          borderRadius: 2,
          px: 1.5,
          py: 0.6,
          gap: 1,
          flexGrow: 1,
          maxWidth: 380,
        }}
      >
        <SearchIcon sx={{ color: "text.secondary", fontSize: 18 }} />
        <InputBase
          placeholder={searchPlaceholder}
          sx={{ fontSize: "0.875rem", flexGrow: 1 }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {/* Icons */}
      <Tooltip title="Notifications">
        <IconButton size="small" id="notifications-btn">
          <Badge badgeContent={3} color="primary" sx={{ "& .MuiBadge-badge": { fontSize: "0.65rem" } }}>
            <NotificationsNoneIcon sx={{ fontSize: 22, color: "text.secondary" }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Settings">
        <IconButton size="small" id="settings-btn">
          <SettingsOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
        </IconButton>
      </Tooltip>

      {/* User Avatar */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, ml: 1 }}>
        <Box sx={{ textAlign: "right", display: { xs: "none", sm: "block" } }}>
          <Typography
            variant="caption"
            sx={{ display: "block", color: "text.secondary", lineHeight: 1.2 }}
          >
            Admin
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
            {userName}
          </Typography>
        </Box>
        <Avatar
          sx={{
            width: 34,
            height: 34,
            bgcolor: "primary.main",
            fontSize: "0.85rem",
            fontWeight: 700,
          }}
        >
          AP
        </Avatar>
      </Box>
    </Box>
  );
}
