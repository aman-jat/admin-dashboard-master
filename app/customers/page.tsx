import type { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";
import CustomerInsightsPage from "@/components/CustomerInsightsPage";

export const metadata: Metadata = {
  title: "Customer Insights | The Atelier Admin",
  description: "In-depth behavioral analysis and retention metrics for The Atelier's customer base.",
};

export default function CustomerInsights() {
  return (
    <DashboardLayout>
      <CustomerInsightsPage />
    </DashboardLayout>
  );
}
