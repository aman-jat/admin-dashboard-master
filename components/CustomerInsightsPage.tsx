'use client';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Divider,
  IconButton,
  Fab,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { useTheme } from '@mui/material/styles';

const acquisitionData = [
  { week: 'Week 1', new: 320, returning: 180 },
  { week: 'Week 2', new: 280, returning: 240 },
  { week: 'Week 3', new: 410, returning: 200 },
  { week: 'Week 4', new: 360, returning: 310 },
];

const funnelSteps = [
  { label: 'Visitors', value: 100_100, pct: 100, color: '#B91C1C' },
  { label: 'Added to Cart', value: 18_200, pct: 18, color: '#DC2626' },
  { label: 'Purchased', value: 4_820, pct: 4.8, color: '#EF4444' },
];

const eliteClients = [
  {
    name: 'Amara Singh',
    email: 'amara.s@example.com',
    tier: 'PLATINUM',
    tierColor: '#A78BFA',
    orders: 42,
    spend: '₹64,200',
    status: 'Active',
    initials: 'AS',
    avatarColor: '#7C3AED',
  },
  {
    name: 'Vikram Mehta',
    email: 'v.mehta@corp.in',
    tier: 'GOLD',
    tierColor: '#F59E0B',
    orders: 28,
    spend: '₹56,150',
    status: 'Active',
    initials: 'VM',
    avatarColor: '#D97706',
  },
  {
    name: 'Priya Sharma',
    email: 'priya.sha@outlook.com',
    tier: 'SILVER',
    tierColor: '#6B7280',
    orders: 15,
    spend: '₹32,600',
    status: 'Away',
    initials: 'PS',
    avatarColor: '#4B5563',
  },
];

const tierBadgeStyle: Record<string, object> = {
  PLATINUM: { bgcolor: '#EDE9FE', color: '#6D28D9', fontWeight: 700 },
  GOLD: { bgcolor: '#FEF3C7', color: '#B45309', fontWeight: 700 },
  SILVER: { bgcolor: '#F3F4F6', color: '#374151', fontWeight: 700 },
};

export default function CustomerInsightsPage() {
  const theme = useTheme();
  return (
    <Box sx={{ p: { xs: 2, md: 3.5 }, maxWidth: 1200, mx: 'auto' }}>
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
            Customer Insights
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            In-depth behavioral analysis and retention metrics.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip
            label='Last 30 Days'
            variant='outlined'
            size='small'
            sx={{ fontWeight: 500, fontSize: '0.8rem' }}
          />
          <Button
            variant='contained'
            color='primary'
            startIcon={<DownloadIcon />}
            size='small'
            id='export-report-btn'
            sx={{ px: 2 }}>
            Export Report
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2.5}>
        {/* Total Active Customers */}
        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 1.5,
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: '#EDE9FE',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <GroupIcon sx={{ color: '#7C3AED', fontSize: 20 }} />
                  </Box>
                </Box>
                <Chip
                  icon={<TrendingUpIcon sx={{ fontSize: '14px !important' }} />}
                  label='+10.5%'
                  size='small'
                  sx={{
                    bgcolor: '#DCFCE7',
                    color: '#16A34A',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              </Box>
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Total Active Customers
              </Typography>
              <Typography
                variant='h3'
                fontWeight={800}
                sx={{ mt: 0.5, letterSpacing: '-0.02em' }}>
                14,282
              </Typography>
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ mt: 0.5, display: 'block' }}>
                Updated 5 minutes ago
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Acquisition vs Retention Chart */}
        <Grid size={{ xs: 12, sm: 7, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2.5,
                }}>
                <Typography
                  variant='h6'
                  fontWeight={600}
                  sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: '0.82rem',
                    color: 'text.secondary',
                  }}>
                  Acquisition vs. Retention
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: '#B91C1C',
                      }}
                    />
                    <Typography variant='caption'>New</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: '#FECACA',
                      }}
                    />
                    <Typography variant='caption'>Returning</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ height: 160 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart
                    data={acquisitionData}
                    barSize={24}
                    barGap={4}
                    margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    <CartesianGrid
                      strokeDasharray='3 3'
                      vertical={false}
                      stroke='#F0F0F0'
                    />
                    <XAxis
                      dataKey='week'
                      tick={{ fontSize: 11, fill: '#64748B' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: '#64748B' }}
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
                      dataKey='new'
                      fill={theme.palette.primary.main}
                      radius={[3, 3, 0, 0]}
                      name='New'
                    />
                    <Bar
                      dataKey='returning'
                      fill={theme.palette.primary['50']}
                      radius={[3, 3, 0, 0]}
                      name='Returning'
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Conversion Funnel */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant='h6' fontWeight={600} gutterBottom>
                Conversion Funnel
              </Typography>
              <Stack spacing={2} sx={{ mt: 1 }}>
                {funnelSteps.map(step => (
                  <Box key={step.label}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 0.5,
                      }}>
                      <Typography variant='body2' color='text.secondary'>
                        {step.label}
                      </Typography>
                      <Typography variant='body2' fontWeight={600}>
                        {step.value.toLocaleString()}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant='determinate'
                      value={step.pct}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        bgcolor: '#F3F4F6',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: step.color,
                          borderRadius: 5,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>

              {/* Funnel Health */}
              <Box
                sx={{
                  mt: 2.5,
                  p: 1.5,
                  bgcolor: '#F0FDF4',
                  borderRadius: 2,
                  border: '1px solid #BBF7D0',
                  display: 'flex',
                  gap: 1,
                  alignItems: 'flex-start',
                }}>
                <Typography sx={{ fontSize: '1rem' }}>✅</Typography>
                <Box>
                  <Typography
                    variant='caption'
                    fontWeight={600}
                    color='#16A34A'
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                    Funnel Health
                  </Typography>
                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ display: 'block', mt: 0.3, lineHeight: 1.4 }}>
                    Your cart-to-purchase rate is 2.4% higher than last quarter.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Elite Clients */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 0.5,
                }}>
                <Typography variant='h6' fontWeight={600}>
                  Elite Clients
                </Typography>
                <Button
                  size='small'
                  color='primary'
                  id='view-all-clients-btn'
                  sx={{ fontSize: '0.78rem' }}>
                  VIEW ALL
                </Button>
              </Box>
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ mb: 2, display: 'block' }}>
                Our highest lifetime value customers.
              </Typography>

              <TableContainer>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Client</TableCell>
                      <TableCell>Tier</TableCell>
                      <TableCell align='center'>Orders</TableCell>
                      <TableCell align='right'>Total Spend</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {eliteClients.map(client => (
                      <TableRow
                        key={client.email}
                        sx={{
                          '&:hover': { bgcolor: '#FAFAF9' },
                          transition: 'background-color 0.15s',
                        }}>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.2,
                            }}>
                            <Avatar
                              sx={{
                                width: 34,
                                height: 34,
                                bgcolor: client.avatarColor,
                                fontSize: '0.8rem',
                                fontWeight: 700,
                              }}>
                              {client.initials}
                            </Avatar>
                            <Box>
                              <Typography variant='body2' fontWeight={600}>
                                {client.name}
                              </Typography>
                              <Typography
                                variant='caption'
                                color='text.secondary'>
                                {client.email}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={client.tier}
                            size='small'
                            sx={{
                              fontSize: '0.68rem',
                              fontWeight: 700,
                              ...tierBadgeStyle[client.tier],
                            }}
                          />
                        </TableCell>
                        <TableCell align='center'>
                          <Typography variant='body2' fontWeight={500}>
                            {client.orders}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body2' fontWeight={600}>
                            {client.spend}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.8,
                            }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor:
                                  client.status === 'Active'
                                    ? '#22C55E'
                                    : '#F59E0B',
                              }}
                            />
                            <Typography
                              variant='caption'
                              color='text.secondary'>
                              {client.status}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* FAB */}
      <Fab
        color='primary'
        aria-label='add'
        id='fab-add-btn'
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          boxShadow: '0 4px 20px rgba(185,28,28,0.4)',
        }}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
