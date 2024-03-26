import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '16px', 
      position: 'fixed',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
    }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2024, Marseille Unité Spéciale
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
