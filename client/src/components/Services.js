import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const services = [
  {
    icon: '📊',
    title: 'Stratégie digitale',
    description: 'Développement d\'une stratégie digitale sur mesure pour votre entreprise.'
  },
  {
    icon: '💻',
    title: 'Création de site web',
    description: 'Sites vitrines et e-commerce performants et adaptés à vos besoins.'
  },
  {
    icon: '📱',
    title: 'Réseaux sociaux',
    description: 'Gestion complète de votre présence sur les réseaux sociaux.'
  },
  {
    icon: '🔍',
    title: 'Référencement SEO',
    description: 'Amélioration de votre visibilité sur les moteurs de recherche.'
  },
  {
    icon: '🎨',
    title: 'Design graphique',
    description: 'Création d\'une identité visuelle forte et cohérente.'
  },
  {
    icon: '📈',
    title: 'Publicité en ligne',
    description: 'Campagnes publicitaires ciblées et performantes.'
  }
];

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1E1E1E',
  color: 'white',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  border: '1px solid #333',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    borderColor: '#00F0FF',
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#00F0FF',
}));

const Services = () => {
  return (
    <Box 
      sx={{ 
        py: 10,
        backgroundColor: '#121212',
        color: 'white',
      }}
      id="services"
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              color: 'white',
            }}
          >
            Nos services
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '700px',
              mx: 'auto',
              opacity: 0.8,
            }}
          >
            Découvrez nos services sur mesure pour propulser votre présence en ligne
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      color: 'white',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 3,
                      flexGrow: 1,
                      opacity: 0.8,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#00F0FF',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      '&:hover': {
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    En savoir plus
                    <Box component="span" sx={{ ml: 1, fontSize: '1.2rem' }}>→</Box>
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;