import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportIcon from '@mui/icons-material/Report';
import { theme } from '../Theme/theme';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 360px)');
    const logoSize = isMobile ? '150px' : '250px'

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
           
            <AppBar position="fixed" sx={{ backgroundColor: theme.palette.black.main,marginBottom: '30px' }}>
                <Toolbar>
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        
                    <img src="./src/assets/img/logowhit.png" alt="Logo" style={{ width: isMobile ?'100px':'250px',  height:isMobile ?'150px' :'300px', 
                    position: 'absolute', 
                    top:isMobile ? '-60px':'-120px', 
                    left:isMobile ? '-20px':'-50px' }} />
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
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Accueil" />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ mr: 2 }}>
                                <Link to="/map" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                        <PublicIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Carte" primaryTypographyProps={{ sx: { whiteSpace: 'normal', lineHeight: 'normal' } }} />
                                </Link>
                            </ListItem>
                            <ListItem button sx={{ mr: 2 }}>
                                <Link to="/list" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                        <ListAltIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Criminels" />
                                </Link>
                            </ListItem>
                            <ListItem button>
                                <Link to="/report" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemIcon sx={{ color: theme.palette.otherColor.main }}>
                                        <ReportIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Rapport" />
                                </Link>
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
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Accueil" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/map" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemIcon>
                                <PublicIcon />
                            </ListItemIcon>
                            <ListItemText primary="Carte du Monde" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/list" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Liste des Criminels" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/report" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItemIcon>
                                <ReportIcon />
                            </ListItemIcon>
                            <ListItemText primary="Rapport" />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>

        </>
    );
}

export default Navbar;
