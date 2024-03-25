import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportIcon from '@mui/icons-material/Report';
import { theme } from '../Theme/theme';

function Home() {




    return (
        <>
           
            <Box sx={{ p: 2, marginTop: 5 }}>
<Typography variant="h4" sx={{ mb: 2 }}>
    Titre de l'article
</Typography>
<Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit vitae libero feugiat, nec molestie arcu vehicula. Donec id nibh at enim ultrices suscipit. Vestibulum et justo tellus. Nulla facilisi. Donec maximus bibendum neque, sit amet ultricies lorem blandit a. Aliquam erat volutpat. Nunc non nunc neque. Duis ut tortor eu dolor scelerisque commodo id nec ligula. Cras vel nibh eget leo pulvinar interdum. Mauris vitae justo nec risus fermentum ultrices. Nullam tempor condimentum ultrices. Curabitur dapibus tristique nulla, sit amet feugiat turpis condimentum at.
</Typography>
</Box>

        </>
    );
}

export default Home;


