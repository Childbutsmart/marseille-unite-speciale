import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Home() {
    const theme = useTheme();

    return (
        <Box position="relative" width="100%" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" paddingBottom="100px">
            <img src="src/assets/img/crime_scene.jpg" alt="Scène de crime" style={{ width: '100%', height: '80vh', objectFit: 'cover', borderRadius: theme.shape.borderRadius }} />
            
            <Box 
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="80vh"
                bgcolor="rgba(255, 255, 255, 0.6)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                textAlign="center"
                sx={{
                    textShadow: '0 0 20px white',
                    '& h1': {
                        fontWeight: 'bold', 
                        WebkitTextStrokeWidth: '3px', 
                        WebkitTextStrokeColor: 'white', 
                    },
                }}
            >
                <Typography variant="h1">Portail Mondial de la Justice</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" marginTop="30px">
                <img src="src/assets/img/Interpol.webp" alt="logo" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
                <Typography variant="body1" style={{ width: '45%', textAlign: 'left', padding: '0 20px' }}>
                    Que vous soyez un citoyen attentif à la sécurité internationale ou un représentant des forces de l'ordre, notre plateforme est votre principal outil dans la lutte contre la criminalité à l'échelle mondiale. Interpol, l'Organisation internationale de police criminelle, vous offre un accès privilégié à son Portail Mondial de la Justice, une ressource essentielle pour identifier, localiser et appréhender les criminels recherchés à travers le monde.
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" marginTop="30px">
                <Typography variant="body1" style={{ width: '45%', textAlign: 'right', padding: '0 20px' }}>
                    Au cœur de notre portail se trouve une carte interactive vous permettant d'explorer les zones où les criminels sont activement traqués. Cette carte vous offre une vision globale des régions où la criminalité est particulièrement préoccupante, favorisant ainsi la coopération entre les divers organismes de sécurité à l'échelle internationale.

                    En plus de la carte interactive, notre portail propose un formulaire de dénonciation anonyme. Si vous détenez des informations sur un criminel recherché, vous pouvez les partager en toute confidentialité en remplissant ce formulaire. Votre contribution peut être déterminante dans l'arrestation de criminels dangereux, contribuant ainsi à rendre le monde plus sûr pour tous.
                </Typography>
                <img src="src/assets/img/309622.webp" alt="arrestation" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" marginTop="30px">
                <img src="src/assets/img/Training.jpg" alt="train" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
                <Typography variant="body1" style={{ width: '45%', textAlign: 'left', padding: '0 20px' }}>
                    Interpol, avec sa devise "Relier les polices pour un monde plus sûr", s'engage résolument à prévenir et combattre la criminalité grâce à une coopération policière internationale renforcée. Ensemble, sur le Portail Mondial de la Justice, nous œuvrons pour repousser les frontières de la criminalité et garantir une justice équitable pour tous.<br></br><br></br>
                    Interpol publie différents types de notices pour aider à la localisation et à l'arrestation de criminels recherchés à l'échelle internationale.<br></br> Voici les principales notices d'Interpol :
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" marginTop="30px" >
                <Typography variant="body1" style={{ width: '45%', textAlign: 'left', padding: '0 20px' }}>
                   
   
                    Notice Rouge : C'est la notice la plus connue et la plus sérieuse. Elle est émise pour rechercher et localiser des personnes recherchées pour des crimes graves, telles que des meurtres, des enlèvements, des crimes financiers importants ou des crimes contre l'humanité. La Notice Rouge demande l'arrestation provisoire ou la détention préventive de la personne recherchée, avec vue sur son extradition.<br></br><br></br>
   
                    Notice Noire : Cette notice est émise pour signaler des menaces terroristes imminentes, des groupes terroristes actifs ou des individus associés au terrorisme. Elle est utilisée pour partager des renseignements critiques et urgents sur des activités terroristes afin d'aider à prévenir de futurs attentats ou à appréhender des suspects.<br></br><br></br>
   
                    Notice Spéciale : Cette notice est utilisée dans des situations exceptionnelles nécessitant une attention particulière. Elle peut être émise pour des raisons humanitaires, telles que des disparitions en masse, des urgences médicales ou des situations de crise où une action immédiate est nécessaire.<br></br><br></br>
   
                    Chaque type de notice émise par Interpol répond à des besoins spécifiques en matière de sécurité internationale et de lutte contre la criminalité, et elles sont diffusées aux agences d'application de la loi dans le monde entier pour faciliter la coopération et l'échange d'informations dans ces domaines.
                </Typography>
                <img src="src/assets/img/sayyou.jpg" alt="notice" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
            </Box>
           
         </Box>
    );
}

export default Home;
