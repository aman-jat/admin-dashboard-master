import type { Metadata } from 'next';
import DashboardLayout from '@/components/DashboardLayout';
import SalesDashboardPage from '@/components/SalesDashboardPage';

export const metadata: Metadata = {
  title: 'Sales Dashboard | The Atelier Admin',
  description:
    'Sales performance overview including revenue growth, order status, offers performance, and traffic comparisons.',
};

export default function Sales() {
  return (
    <DashboardLayout>
      <SalesDashboardPage />
    </DashboardLayout>
  );
}
