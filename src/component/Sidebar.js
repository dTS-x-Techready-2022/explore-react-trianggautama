import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

export const Sidebar = () => {
  return (
    <Box 
        flex={1} 
        p={2} 
        sx={{
            display: {
                xs:"none", sm: "block",
                backgroundColor:'#ffffff'
            }
        }}
    >
        <List>
          <ListItem disablePadding>
            <Link to="/home">
              <ListItemButton component="a" href="#">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profil" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Riwayat Assessment" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  )
}
