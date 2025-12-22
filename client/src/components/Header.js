import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      color="transparent" // Make AppBar transparent
      elevation={0} 
      sx={{ 
        // Add a blur effect to mimic the "glassmorphism" in the images
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(10, 10, 10, 0.3)', // A subtle dark background
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Styled Logo */}
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white',
              cursor: 'pointer' // Make it feel like a link
            }}
          >
            <Box 
              component="span" 
              sx={{
                // Approximate the colorful "glitch" effect on the hash
                color: '#00f6ff', // Bright blue base
                textShadow: '1px 1px #ff005c, -1px -1px #ff005c', // Pink/red shadow
                display: 'inline-block',
                marginRight: '2px', // Space between # and text
                fontSize: '1.1em', // Make hash slightly bigger
                position: 'relative',
                top: '1px'
              }}
            >
              #
            </Box>
            Faylen Systems
          </Typography>
          
          {/* Updated Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button color="inherit" href="#accueil" sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}>Accueil</Button>
            <Button color="inherit" href="#services" sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}>Services</Button>
            <Button color="inherit" href="#agence" sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}>Agence</Button>
            <Button color="inherit" href="#contact" sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}>Contact</Button>
            
            {/* New CTA Button */}
            <Button 
              variant="outlined" 
              href="#prendre-rdv"
              sx={{ 
                color: 'white',
                borderColor: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                px: 2.5,
                py: 0.5,
                borderRadius: '8px', // Match the rounded corners in the image
                ml: 2, // Add some margin
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
                  borderColor: 'white'
                }
              }}
            >
              Prendre RDV
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;