import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportIcon from '@mui/icons-material/Report';
import { theme } from '../Theme/theme';

function Navbar() {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 360px)');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
           
            <AppBar position="static" sx={{ backgroundColor: theme.palette.black.main }}>
                <Toolbar>
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        <img src="./src/assets/img/logowhit.png" alt="Logo" style={{ width: '250px', height: '300px', position: 'absolute', top: '-120px', left: '-50px' }} />
                    </Box>

                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {!isMobile && (
                        <List component="nav" aria-label="main navigation" sx={{ display: 'flex' }}>
                            <ListItem button sx={{ mr: 2 }}>
                                <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Accueil" />
                            </ListItem>
                            <ListItem button sx={{ mr: 2 }}>
                                <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                    <PublicIcon />
                                </ListItemIcon>
                                <ListItemText primary="Carte du Monde" primaryTypographyProps={{ sx: { whiteSpace: 'normal', lineHeight: 'normal' } }} />
                            </ListItem>
                            <ListItem button sx={{ mr: 2 }}>
                                <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="Liste des Criminels" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                    <ReportIcon />
                                </ListItemIcon>
                                <ListItemText primary="Rapport" />
                            </ListItem>
                        </List>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
            >
                <List>
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <CloseIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accueil" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Carte du Monde" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Liste des Criminels" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Rapport" />
                    </ListItem>
                </List>
            </Drawer>

        </>
    );
}

export default Navbar;