'use client';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  LinearProgress,
  Stack,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/LocalOffer';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
} from 'recharts';
import { useTheme } from '@mui/material/styles';

const salesData = [
  { period: 'Jan', sales: 820, growth: 8 },
  { period: 'Feb', sales: 940, growth: 10 },
  { period: 'Mar', sales: 1040, growth: 12 },
  { period: 'Apr', sales: 1120, growth: 9 },
  { period: 'May', sales: 1280, growth: 14 },
  { period: 'Jun', sales: 1390, growth: 16 },
];

const orderStatus = [
  { label: 'Pending', value: 68, color: '#F59E0B' },
  { label: 'Shipped', value: 146, color: '#2563EB' },
  { label: 'Delivered', value: 892, color: '#16A34A' },
];

const offerData = [
  { label: '20% off', revenue: 482000, conversion: 5.6, top: true },
  { label: 'Buy 1 Get 1', revenue: 378000, conversion: 4.1 },
  { label: 'Free Shipping', revenue: 295000, conversion: 3.4 },
];

const trafficData = [
  { source: 'Instagram', visitors: 820 },
  { source: 'Website', visitors: 1260 },
  { source: 'WhatsApp', visitors: 710 },
  { source: 'Offline', visitors: 420 },
];

export default function SalesDashboardPage() {
  const theme = useTheme();
  return (
    <Box sx={{ p: { xs: 2, md: 3.5 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          mb: 3,
          gap: 2,
        }}>
        <Box>
          <Typography
            variant='h4'
            fontWeight={700}
            gutterBottom
            sx={{ mb: 0.5 }}>
            Sales Dashboard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            A consolidated view of revenue, orders, offers and traffic
            performance.
          </Typography>
        </Box>
        <Button
          variant='contained'
          color='primary'
          startIcon={<DownloadIcon />}
          sx={{ textTransform: 'none', fontWeight: 600 }}>
          Export Report
        </Button>
      </Box>

      <Grid container spacing={2.5} alignItems='stretch'>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ p: 3, flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 2.5,
                  gap: 1,
                }}>
                <Box>
                  <Typography variant='h6' fontWeight={600} sx={{ mb: 0.5 }}>
                    Total Sales
                  </Typography>
                  <Typography
                    variant='h3'
                    fontWeight={800}
                    sx={{ letterSpacing: '-0.03em' }}>
                    ₹12.8M
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ mt: 0.75 }}>
                    Revenue across the last 6 months
                  </Typography>
                </Box>
                <Chip
                  label='+18.4% vs last period'
                  color='success'
                  sx={{ fontWeight: 600, height: 32 }}
                />
              </Box>

              <Box sx={{ height: 260 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <ComposedChart
                    data={salesData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid
                      strokeDasharray='3 3'
                      vertical={false}
                      stroke='#F0F0F0'
                    />
                    <XAxis
                      dataKey='period'
                      tick={{ fontSize: 12, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      yAxisId='left'
                      tick={{ fontSize: 12, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      yAxisId='right'
                      orientation='right'
                      tick={{ fontSize: 12, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartTooltip
                      contentStyle={{
                        borderRadius: 8,
                        border: '1px solid #E5E7EB',
                        fontSize: 12,
                      }}
                    />
                    <Bar
                      yAxisId='left'
                      dataKey='sales'
                      fill={theme.palette.primary.main}
                      radius={[6, 6, 0, 0]}
                      barSize={24}
                    />
                    <Line
                      yAxisId='right'
                      type='monotone'
                      dataKey='growth'
                      stroke='#2563EB'
                      strokeWidth={3}
                      dot={{ r: 3 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ p: 3, flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2.5,
                }}>
                <Box>
                  <Typography variant='h6' fontWeight={600} sx={{ mb: 0.5 }}>
                    Total Orders
                  </Typography>
                  <Typography
                    variant='h3'
                    fontWeight={800}
                    sx={{ letterSpacing: '-0.03em' }}>
                    1,106
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Current order volume across all channels
                  </Typography>
                </Box>
                <LocalShippingIcon
                  sx={{ fontSize: 36, color: 'primary.main' }}
                />
              </Box>

              <Stack spacing={2}>
                {orderStatus.map(status => (
                  <Box key={status.label}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 0.75,
                      }}>
                      <Typography variant='body2' fontWeight={600}>
                        {status.label}
                      </Typography>
                      <Typography variant='body2' fontWeight={700}>
                        {status.value}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant='determinate'
                      value={(status.value / 1106) * 100}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        bgcolor: '#F3F4F6',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: status.color,
                          borderRadius: 5,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ p: 3, flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2.5,
                }}>
                <Box>
                  <Typography variant='h6' fontWeight={600} sx={{ mb: 0.5 }}>
                    Offers Performance
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Which discount brought the best uplift
                  </Typography>
                </Box>
                <DiscountIcon sx={{ fontSize: 28, color: 'primary.main' }} />
              </Box>

              <Stack spacing={2}>
                {offerData.map(offer => (
                  <Box
                    key={offer.label}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: offer.top ? '#FEF2F2' : '#FAFAFA',
                      border: offer.top
                        ? '1px solid #FECACA'
                        : '1px solid #F3F4F6',
                    }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                      }}>
                      <Typography variant='body2' fontWeight={600}>
                        {offer.label}
                      </Typography>
                      {offer.top ? (
                        <Chip
                          label='Best'
                          size='small'
                          color='secondary'
                          sx={{ fontWeight: 600 }}
                        />
                      ) : null}
                    </Box>
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      sx={{ display: 'block', mb: 1 }}>
                      ₹{offer.revenue.toLocaleString()} in sales •{' '}
                      {offer.conversion}% conversion
                    </Typography>
                    <LinearProgress
                      variant='determinate'
                      value={(offer.revenue / 482000) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: '#F3F4F6',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: theme.palette.primary.main,
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ p: 3, flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2.5,
                }}>
                <Box>
                  <Typography variant='h6' fontWeight={600} sx={{ mb: 0.5 }}>
                    Instagram vs Website Traffic
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Compare channel traffic performance this month
                  </Typography>
                </Box>
                <InstagramIcon sx={{ fontSize: 28, color: '#E1306C' }} />
              </Box>

              <Box sx={{ height: 260 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart
                    data={trafficData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid
                      strokeDasharray='3 3'
                      vertical={false}
                      stroke='#F0F0F0'
                    />
                    <XAxis
                      dataKey='source'
                      tick={{ fontSize: 12, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RechartTooltip
                      contentStyle={{
                        borderRadius: 8,
                        border: '1px solid #E5E7EB',
                        fontSize: 12,
                      }}
                    />
                    <Bar
                      dataKey='visitors'
                      fill='#2563EB'
                      radius={[6, 6, 0, 0]}
                      barSize={36}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
