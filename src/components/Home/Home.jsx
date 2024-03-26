import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Home() {
    const theme = useTheme();

    return (
        <Box position="relative" width="100%" height="100vh" display="flex" flexDirection="column" alignItems="center">
            <img src="src/assets/img/crime_scene.jpg" alt="Crime Scene" style={{ width: '100%', height: '80vh', objectFit: 'cover', borderRadius: theme.shape.borderRadius }} />
            
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
                <Typography variant="h1">Portail Mondial de la Justice<br />ポータル・ワールド・ジャスティス</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%">
                <img src="src/assets/img/Cit-10.png" alt="Cit-10" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
                <Typography variant="body1" style={{ width: '45%', textAlign: 'left', padding: '0 20px' }}>
                    Que vous soyez un citoyen attentif à la sécurité internationale ou un représentant des forces de l'ordre, notre plateforme est votre principal outil dans la lutte contre la criminalité à l'échelle mondiale. Interpol, l'Organisation internationale de police criminelle, vous offre un accès privilégié à son Portail Mondial de la Justice, une ressource essentielle pour identifier, localiser et appréhender les criminels recherchés à travers le monde.
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" marginTop="30px">
                <Typography variant="body1" style={{ width: '45%', textAlign: 'right', padding: '0 20px' }}>
                    Au cœur de notre portail se trouve une carte interactive vous permettant d'explorer les zones où les criminels sont activement traqués. Cette carte vous offre une vision globale des régions où la criminalité est particulièrement préoccupante, favorisant ainsi la coopération entre les divers organismes de sécurité à l'échelle internationale.

                    En plus de la carte interactive, notre portail propose un formulaire de dénonciation anonyme. Si vous détenez des informations sur un criminel recherché, vous pouvez les partager en toute confidentialité en remplissant ce formulaire. Votre contribution peut être déterminante dans l'arrestation de criminels dangereux, contribuant ainsi à rendre le monde plus sûr pour tous.
                </Typography>
                <img src="src/assets/img/mario.jpg" alt="mario" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" width="90%" marginTop="30px">
                <img src="src/assets/img/sayyou.jpg" alt="sayou" style={{ width: '45%', height: 'auto', borderRadius: theme.shape.ofyou }} />
                <Typography variant="body1" style={{ width: '45%', textAlign: 'left', padding: '0 20px' }}>
                    Interpol, avec sa devise "Relier les polices pour un monde plus sûr", s'engage résolument à prévenir et combattre la criminalité grâce à une coopération policière internationale renforcée. Ensemble, sur le Portail Mondial de la Justice, nous œuvrons pour repousser les frontières de la criminalité et garantir une justice équitable pour tous.
                </Typography>
                Interpol publie différents types de notices pour aider à la localisation et à l'arrestation de criminels recherchés à l'échelle internationale. Voici les principales notices d'Interpol :

Notice Rouge : C'est la notice la plus connue et la plus sérieuse. Elle est émise pour rechercher et localiser des personnes recherchées pour des crimes graves, telles que des meurtres, des enlèvements, des crimes financiers importants ou des crimes contre l'humanité. La Notice Rouge demande l'arrestation provisoire ou la détention préventive de la personne recherchée, avec vue sur son extradition.

Notice Bleue : Cette notice est utilisée pour recueillir des renseignements sur des personnes disparues. Elle peut être utilisée dans des cas de fugues, d'enlèvements ou de personnes disparues pour des raisons inconnues. La notice bleue est souvent utilisée pour localiser des enfants disparus.

Notice Verte : Cette notice est émise pour fournir des avertissements ou des renseignements sur des personnes soupçonnées de commettre des crimes. Elle est utilisée pour partager des informations concernant des individus considérés comme une menace pour la sécurité publique ou pour prévenir des actes criminels.

Notice Jaune : Cette notice est utilisée pour retrouver des personnes disparues ou pour identifier des individus incapables de le faire eux-mêmes. Elle est souvent utilisée dans les cas de catastrophes naturelles, de conflits armés ou de situations d'urgence où des personnes peuvent être séparées de leur famille ou de leur domicile.

Notice Orange : Cette notice est émise pour alerter les forces de l'ordre et les autres organismes concernant des menaces de sécurité potentielles, telles que des armes chimiques, biologiques, radiologiques ou nucléaires, des explosifs, des matières dangereuses ou des cibles potentielles d'attaques terroristes.

Chaque notice contient des informations spécifiques sur la personne recherchée, y compris son identité, sa photographie, ses caractéristiques physiques, ses empreintes digitales, ainsi que des détails sur les crimes présumés ou les circonstances de la disparition. Ces notices sont largement diffusées aux autorités compétentes dans le monde entier pour faciliter la coopération internationale dans la lutte contre la criminalité.





Je m'excuse pour l'omission. Voici des informations supplémentaires sur les notices que j'ai manquées :

Notice Noire : Cette notice est émise pour signaler des menaces terroristes imminentes, des groupes terroristes actifs ou des individus associés au terrorisme. Elle est utilisée pour partager des renseignements critiques et urgents sur des activités terroristes afin d'aider à prévenir de futurs attentats ou à appréhender des suspects.

Notice Spéciale : Cette notice est utilisée dans des situations exceptionnelles nécessitant une attention particulière. Elle peut être émise pour des raisons humanitaires, telles que des disparitions en masse, des urgences médicales ou des situations de crise où une action immédiate est nécessaire.

Notice Mauve : Cette notice est utilisée pour signaler des personnes recherchées pour des infractions liées à la pornographie infantile ou à l'exploitation sexuelle des enfants. Elle vise à sensibiliser et à mobiliser l'attention du public et des autorités sur ces crimes graves et à encourager la coopération internationale pour appréhender les présumés responsables.

Chaque type de notice émise par Interpol répond à des besoins spécifiques en matière de sécurité internationale et de lutte contre la criminalité, et elles sont diffusées aux agences d'application de la loi dans le monde entier pour faciliter la coopération et l'échange d'informations dans ces domaines.
            </Box>
        </Box>
    );
}

export default Home;
