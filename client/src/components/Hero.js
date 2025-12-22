import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Hero = () => {
  const roles = [
    'vidéaste',
    'community manager',
    'copywriter',
    'photographe',
    'graphiste',
    'web designer',
    'media buyer',
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400); // duration of fade-out before next word
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 15, md: 20 },
        pb: 10,
        textAlign: 'center',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(-45deg, #0a0a0a, #0f0221, #18004b, #2a007a)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 12s ease infinite',
        '@keyframes gradientMove': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      {/* soft blue-magenta glow overlays */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 25% 30%, rgba(0, 128, 255, 0.2), transparent 60%), radial-gradient(circle at 75% 70%, rgba(255, 0, 255, 0.2), transparent 60%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main heading with smooth alignment and fade */}
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            mb: 4,
            color: 'white',
            lineHeight: 1.2,
            display: 'inline-block',
            transition: 'all 0.4s ease',
          }}
        >
          Intégrez un{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 400, // make the changing word not bold
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              transform: fade ? 'translateY(0)' : 'translateY(10px)',
              display: 'inline-block',
              minWidth: '180px', // keeps width stable, smoother alignment
              textAlign: 'center',
              background:
                'linear-gradient(90deg, #4cc9f0, #f72585)', // subtle hue gradient text
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {roles[index]}
          </Box>{' '}
          à votre entreprise.
        </Typography>

        <Typography
          variant="h6"
          paragraph
          sx={{
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            color: 'rgba(255, 255, 255, 0.8)',
            transition: 'color 0.3s ease',
          }}
        >
          Que vous soyez une multinationale, une PME ou indépendant, nous avons la
          formule qu'il vous faut pour renforcer ou externaliser votre communication.
        </Typography>

        <Button
          variant="outlined"
          size="large"
          href="#contact"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            color: 'white',
            borderColor: 'white',
            borderWidth: '2px',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
            },
          }}
        >
          EN SAVOIR PLUS
        </Button>

        <Typography
          variant="overline"
          display="block"
          sx={{
            mt: 4,
            fontWeight: 500,
            letterSpacing: 1,
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          REJOIGNEZ LES 400+ ENTREPRISES QUI NOUS FONT CONFIANCE
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;