'use client';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  LinearProgress,
  Divider,
  Stack,
  Tooltip,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';

const categoryData = [
  { name: 'Western', value: 4.2, label: '₹4.2M', pct: 100 },
  { name: 'Suit', value: 2.8, label: '₹2.8M', pct: 67 },
  { name: 'Jeans', value: 1.5, label: '₹1.5M', pct: 36 },
  { name: 'Jewelry', value: 0.92, label: '₹920K', pct: 22 },
];

const barChartData = [
  { name: 'Western', revenue: 4200 },
  { name: 'Suit', revenue: 2800 },
  { name: 'Jeans', revenue: 1500 },
  { name: 'Jewelry', revenue: 920 },
];

const topProducts = [
  {
    id: 'AP-LHG-001',
    name: 'Midnight Crimson Lehenga',
    category: 'Suit',
    revenue: '₹1,240,090',
    sales: 84,
    status: 'IN STOCK',
    stars: 5,
    color: '#7C2D12',
  },
  {
    id: 'AP-SAR-224',
    name: 'Rose Quartz Silk Saree',
    category: 'Western',
    revenue: '₹945,060',
    sales: 112,
    status: 'HIGH STOCK',
    stars: 4,
    color: '#BE185D',
  },
  {
    id: 'AP-JW-412',
    name: 'Temple Gold Jhumkas',
    category: 'Jewelry',
    revenue: '₹562,060',
    sales: 45,
    status: 'LOW STOCK',
    stars: 1,
    color: '#B45309',
  },
];

const restockItems = [
  { name: 'Banarasi Silk', units: 2, critical: false },
  { name: 'Kundan Set', units: 0, critical: true },
];

const analyticsData = {
  visitors: 15420,
  converted: 1245,
  conversionRate: 8.07,
  avgOrderValue: 2847,
};

const top5ProductsData = [
  { name: 'Midnight Crimson Lehenga', revenue: 1240 },
  { name: 'Rose Quartz Silk Saree', revenue: 945 },
  { name: 'Temple Gold Jhumkas', revenue: 562 },
  { name: 'Emerald Green Anarkali', revenue: 423 },
  { name: 'Ruby Red Bridal Set', revenue: 389 },
];

const statusColors: Record<
  string,
  'success' | 'warning' | 'error' | 'default'
> = {
  'IN STOCK': 'success',
  'HIGH STOCK': 'default',
  'LOW STOCK': 'warning',
};

function StarRating({ count, max = 5 }: { count: number; max?: number }) {
  const colors = ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#22C55E'];
  return (
    <Box sx={{ display: 'flex', gap: 0.4 }}>
      {Array.from({ length: max }).map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            bgcolor: i < count ? colors[count - 1] : '#E5E7EB',
          }}
        />
      ))}
    </Box>
  );
}

export default function ProductPerformancePage() {
  return (
    <Box sx={{ p: { xs: 2, md: 3.5 } }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 3,
        }}>
        <Box>
          <Typography
            variant='h4'
            fontWeight={700}
            gutterBottom
            sx={{ mb: 0.5 }}>
            Analytics Overview
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Real-time performance insights across your boutique
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.8,
              bgcolor: '#DCFCE7',
              color: '#16A34A',
              px: 1.5,
              py: 0.6,
              borderRadius: 2,
              fontSize: '0.8rem',
              fontWeight: 600,
            }}>
            <TrendingUpIcon sx={{ fontSize: 14 }} />
            +14.2% Expanding
          </Box>
          <Tooltip title='Filter by date'>
            <IconButton size='small' id='date-filter-btn'>
              <CalendarTodayIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ bgcolor: '#F0F9FF', border: '1px solid #0EA5E9' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: '#0EA5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <PeopleIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant='h4' fontWeight={700} color='#0EA5E9'>
                    {analyticsData.visitors.toLocaleString()}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Total Visitors
                  </Typography>
                  <Typography variant='caption' sx={{ color: '#10B981' }}>
                    +12.5% from last month
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ bgcolor: '#FEF3C7', border: '1px solid #F59E0B' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: '#F59E0B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ShoppingCartIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant='h4' fontWeight={700} color='#F59E0B'>
                    {analyticsData.converted.toLocaleString()}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Converted Customers
                  </Typography>
                  <Typography variant='caption' sx={{ color: '#10B981' }}>
                    +8.2% from last month
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ bgcolor: '#DCFCE7', border: '1px solid #10B981' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TrendingUpIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant='h4' fontWeight={700} color='#10B981'>
                    {analyticsData.conversionRate}%
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Conversion Rate
                  </Typography>
                  <Typography variant='caption' sx={{ color: '#10B981' }}>
                    +2.1% from last month
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ bgcolor: '#FCE7F3', border: '1px solid #EC4899' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: '#EC4899',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AttachMoneyIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant='h4' fontWeight={700} color='#EC4899'>
                    ₹{analyticsData.avgOrderValue.toLocaleString()}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Avg Order Value
                  </Typography>
                  <Typography variant='caption' sx={{ color: '#10B981' }}>
                    +5.7% from last month
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        {/* Category Breakdown Card */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2.5,
                }}>
                <Typography variant='h6' fontWeight={600}>
                  Top 5 Products by Revenue
                </Typography>
                <Chip
                  label='THIS MONTH'
                  size='small'
                  variant='outlined'
                  sx={{ fontSize: '0.7rem', fontWeight: 600 }}
                />
              </Box>

              {/* Bar chart */}
              <Box sx={{ height: 250 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart
                    data={top5ProductsData}
                    barSize={50}
                    margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid
                      strokeDasharray='3 3'
                      vertical={false}
                      stroke='#F0F0F0'
                    />
                    <XAxis
                      dataKey='name'
                      tick={{ fontSize: 12, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                      angle={-45}
                      textAnchor='end'
                      height={80}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={v => `₹${v}K`}
                    />
                    <RechartTooltip
                      formatter={value => [`₹${value}K`, 'Revenue']}
                      contentStyle={{
                        borderRadius: 8,
                        border: '1px solid #E5E7EB',
                        fontSize: 12,
                      }}
                    />
                    <Bar dataKey='revenue' radius={[4, 4, 0, 0]}>
                      {top5ProductsData.map((_, idx) => (
                        <Cell
                          key={idx}
                          fill={
                            idx === 0
                              ? '#B91C1C'
                              : idx === 1
                                ? '#DC2626'
                                : idx === 2
                                  ? '#EF4444'
                                  : idx === 3
                                    ? '#F87171'
                                    : '#FCA5A5'
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Restock Required */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                <WarningAmberIcon
                  sx={{ color: 'primary.main', fontSize: 20 }}
                />
                <Typography variant='h6' fontWeight={600} color='primary.main'>
                  Restock Required
                </Typography>
              </Box>

              <Stack spacing={2}>
                {restockItems.map(item => (
                  <Box
                    key={item.name}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: 1.5,
                      bgcolor: '#FEF2F2',
                      borderRadius: 2,
                      border: '1px solid #FECACA',
                    }}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: 1.5,
                          bgcolor: '#B91C1C',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {item.critical ? (
                          <ErrorOutlineIcon
                            sx={{ color: 'white', fontSize: 18 }}
                          />
                        ) : (
                          <WarningAmberIcon
                            sx={{ color: 'white', fontSize: 18 }}
                          />
                        )}
                      </Box>
                      <Box>
                        <Typography variant='body2' fontWeight={600}>
                          {item.name}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {item.units === 0
                            ? 'Out of stock'
                            : `${item.units} units left`}
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      size='small'
                      variant='contained'
                      color='primary'
                      sx={{ fontSize: '0.7rem', py: 0.4, px: 1.2 }}
                      id={`reorder-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
                      REORDER
                    </Button>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 2 }} />
              <Button
                color='primary'
                size='small'
                fullWidth
                sx={{ fontSize: '0.8rem' }}
                id='view-all-alerts-btn'>
                View all alerts
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Performing Pieces Table */}
        <Grid size={12}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2.5,
                }}>
                <Typography variant='h6' fontWeight={600}>
                  Top Performing Pieces
                </Typography>
              </Box>

              <TableContainer>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Detail</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell align='right'>Revenue</TableCell>
                      <TableCell align='right'>Sales</TableCell>
                      <TableCell>Stock Status</TableCell>
                      <TableCell align='center'>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProducts.map(product => (
                      <TableRow
                        key={product.id}
                        sx={{
                          '&:hover': { bgcolor: '#FAFAF9' },
                          transition: 'background-color 0.15s',
                        }}>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                            }}>
                            <Box
                              sx={{
                                width: 42,
                                height: 42,
                                borderRadius: 2,
                                bgcolor: product.color,
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Typography
                                sx={{ color: 'white', fontSize: '1rem' }}>
                                {product.category === 'Jewelry'
                                  ? '💎'
                                  : product.category === 'Suit'
                                    ? '👗'
                                    : '🥻'}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant='body2' fontWeight={600}>
                                {product.name}
                              </Typography>
                              <Typography
                                variant='caption'
                                color='text.secondary'>
                                SKU: {product.id}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={product.category}
                            size='small'
                            sx={{
                              bgcolor: '#FEF2F2',
                              color: 'primary.main',
                              fontSize: '0.72rem',
                              fontWeight: 500,
                            }}
                          />
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body2' fontWeight={600}>
                            {product.revenue}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body2'>
                            {product.sales} units
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Chip
                              label={product.status}
                              size='small'
                              color={statusColors[product.status]}
                              variant='outlined'
                              sx={{ fontSize: '0.68rem', mb: 0.5 }}
                            />
                            <StarRating count={product.stars} />
                          </Box>
                        </TableCell>
                        <TableCell align='center'>
                          <IconButton size='small' id={`action-${product.id}`}>
                            <MoreVertIcon sx={{ fontSize: 18 }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button
                  id='view-all-metrics-btn'
                  size='small'
                  color='primary'
                  sx={{ fontSize: '0.8rem' }}>
                  VIEW ALL PERFORMANCE METRICS
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
