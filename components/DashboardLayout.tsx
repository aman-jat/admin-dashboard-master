"use client";

import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Topbar />
        <Box sx={{ flex: 1, overflowY: "auto" }}>{children}</Box>
      </Box>
    </Box>
  );
}
