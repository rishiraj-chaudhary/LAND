import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1a1a1a', 
        color: 'white',
        pt: 8,
        pb: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Faylen Systems
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Agence de communication spécialisée en stratégie de référencement payant ou non, branding, photographie, vidéo et marketing digital.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Liens rapides
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#services" color="inherit" underline="hover" sx={{ mb: 1 }}>Services</Link>
              <Link href="#about" color="inherit" underline="hover" sx={{ mb: 1 }}>À propos</Link>
              <Link href="#portfolio" color="inherit" underline="hover" sx={{ mb: 1 }}>Portfolio</Link>
              <Link href="#contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} id="contact">
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: contact@onlyne.be
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Tél: +32 XXX XX XX XX
            </Typography>
            <Typography variant="body2">
              Adresse: [Votre adresse]
            </Typography>
          </Grid>
        </Grid>
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
            mt: 4, 
            pt: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} ONLYNE. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;