import React from 'react';
import { Box, Typography } from '@mui/material';
import { theme } from '../Theme/theme';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.black.main,
                color: '#FFFFFF',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body1">
                © 2024, Marseille Unité Spéciale
            </Typography>
        </Box>
    );
}

export default Footer;
