import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
    return (
        <Box position="relative" width="100%" height="100vh">
            <img src="src/assets/img/crime_scene.jpg" alt="Crime Scene" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bgcolor="rgba(255, 255, 255, 0.6)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                textAlign="center"
                sx={{
                    textShadow: '0 0 20px white',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    '& h4': {
                        marginTop: '10vh', // Réglez la position verticale du titre ici
                    },
                }}
            >
                <Typography variant="h4">Titre de l'article</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit vitae libero feugiat, nec molestie arcu vehicula. Donec id nibh at enim ultrices suscipit. Vestibulum et justo tellus. Nulla facilisi. Donec maximus bibendum neque, sit amet ultricies lorem blandit a. Aliquam erat volutpat. Nunc non nunc neque. Duis ut tortor eu dolor scelerisque commodo id nec ligula. Cras vel nibh eget leo pulvinar interdum. Mauris vitae justo nec risus fermentum ultrices. Nullam tempor condimentum ultrices. Curabitur dapibus tristique nulla, sit amet feugiat turpis condimentum at.
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;
