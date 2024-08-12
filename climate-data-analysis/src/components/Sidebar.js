import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
        top: 64, // Adjust based on the AppBar's height
      },
    }}
  >
    <List>
      <ListItem button>
        <ListItemText primary="Temperature Data" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="CO2 Levels" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Sea Level Rise" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
