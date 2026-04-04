import type { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";
import ProductPerformancePage from "@/components/ProductPerformancePage";

export const metadata: Metadata = {
  title: "Product Performance | The Atelier Admin",
  description: "Real-time product performance insights across your boutique — category breakdown, restock alerts, and top performing pieces.",
};

export default function ProductPerformance() {
  return (
    <DashboardLayout>
      <ProductPerformancePage />
    </DashboardLayout>
  );
}
