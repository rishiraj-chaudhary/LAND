import { Avatar, Box, Grid, Paper, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMemo, useState } from 'react';

// App data (logos + base prices in €)
const apps = [
  { id: 'slack', name: 'Slack', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png', basePrice: 6 },
  { id: 'asana', name: 'Asana', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png', basePrice: 8 },
  { id: 'teams', name: 'Microsoft Teams', logo: 'https://cdn-icons-png.flaticon.com/512/906/906324.png', basePrice: 7 },
  { id: 'drive', name: 'Google Drive', logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png', basePrice: 5 },
  { id: 'salesforce', name: 'Salesforce', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968914.png', basePrice: 10 },
  { id: 'hubspot', name: 'HubSpot', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png', basePrice: 9 },
  { id: 'openai', name: 'OpenAI', logo: 'https://cdn-icons-png.flaticon.com/512/11823/11823292.png', basePrice: 12 },
  { id: 'jira', name: 'Jira', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968875.png', basePrice: 7 },
  { id: 'clickup', name: 'ClickUp', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968871.png', basePrice: 6 },
  { id: 'notion', name: 'Notion', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968906.png', basePrice: 5 },
  { id: 'monday', name: 'Monday', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968849.png', basePrice: 8 },
  { id: 'trello', name: 'Trello', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968863.png', basePrice: 6 },
  { id: 'airtable', name: 'Airtable', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968882.png', basePrice: 7 },
  { id: 'wix', name: 'Wix', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968893.png', basePrice: 4 },
  { id: 'miro', name: 'Miro', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968842.png', basePrice: 6 },
];

// Styled card
const AppCard = styled(Paper)(({ theme, selected }) => ({
  textAlign: 'center',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  borderRadius: 16,
  border: selected ? `2px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.divider}`,
  backgroundColor: selected ? theme.palette.primary.light + '22' : '#fff',
  transition: 'all 0.3s ease',
  '&:hover': { boxShadow: theme.shadows[4], transform: 'translateY(-2px)' },
}));

const PricingEstimator = () => {
  const [selectedApps, setSelectedApps] = useState([]);
  const [userCount, setUserCount] = useState(21);

  const handleAppClick = (id) => {
    setSelectedApps((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    const base = apps
      .filter((a) => selectedApps.includes(a.id))
      .reduce((sum, a) => sum + a.basePrice, 0);
    return base * userCount;
  }, [selectedApps, userCount]);

  const yearlySavings = totalPrice * 12;

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', p: 4 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Which apps do you use?
      </Typography>

      {/* App grid */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {apps.map((app) => (
          <Grid item xs={3} sm={2} md={2} key={app.id}>
            <AppCard
              selected={selectedApps.includes(app.id)}
              onClick={() => handleAppClick(app.id)}
            >
              <Avatar
                src={app.logo}
                alt={app.name}
                sx={{ width: 48, height: 48, mx: 'auto', mb: 1 }}
              />
            </AppCard>
          </Grid>
        ))}
      </Grid>

      {/* Slider */}
      <Typography variant="h6" gutterBottom>
        How many people work at your company?
      </Typography>
      <Slider
        value={userCount}
        onChange={(e, val) => setUserCount(val)}
        min={1}
        max={100}
        valueLabelDisplay="auto"
        sx={{ width: 400, mx: 'auto', mb: 4 }}
      />
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Team size: <strong>{userCount}</strong>
      </Typography>

      {/* Price box */}
      <Paper
        elevation={3}
        sx={{
          py: 4,
          px: 3,
          borderRadius: 4,
          backgroundColor: '#f5faff',
          maxWidth: 500,
          mx: 'auto',
        }}
      >
        <Typography variant="subtitle1" color="text.secondary">
          Total price per month for a team of {userCount} users:
        </Typography>
        <Typography variant="h3" fontWeight={700} color="primary" gutterBottom>
          € {totalPrice.toLocaleString('en-US')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {selectedApps.length} app{selectedApps.length !== 1 && 's'} selected
        </Typography>
      </Paper>

      {/* Yearly saving */}
      <Typography
        variant="h6"
        sx={{ mt: 3 }}
        color="primary"
        fontWeight={600}
      >
        Save € {yearlySavings.toLocaleString('en-US')}/year
      </Typography>
    </Box>
  );
};

export default PricingEstimator;