import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${drawerWidth}px`, // This ensures content doesn't hide behind the sidebar
          paddingTop: '80px', // Adjust to ensure content doesn't overlap with Navbar
        }}
      >
        <h1>Climate Data Analysis Tool</h1>
        {/* Add other content here */}
      </Box>
    </Box>
  );
}

export default App;

