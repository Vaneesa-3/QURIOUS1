import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const role = localStorage.getItem('role');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
const drawerItems = role === 'admin'
  ? [ 
      { label: 'Create Test', path: '/createtest1' }, 
      { label: 'Test Result', path: '/testresult1' } 
    ]
  : [ 
      { label: 'Test Attempted', path: '/testatt' }, 
      { label: 'Test Available', path: '/testavail' } 
    ];

  return (
    <>
    
      <AppBar
        sx={{
          background: 'linear-gradient(90deg, #3f51b5 10%, #2196f3 100%)',
          boxShadow: 4,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              ":focus": { outline: 'none' },
              ":hover": { backgroundColor: 'rgba(255,255,255,0.1)' },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Qurious
          </Typography>
<Link to='/login' style={{ textDecoration: 'none' }}>
  <Button
    sx={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 'bold',
      color: 'white',
      border: '1px solid white',
      borderRadius: 2,
      px: 2,
      transition: '0.3s',
      ":hover": {
        backgroundColor: 'white',
        color: '#3f51b5'
      },
      ":focus": { outline: 'none' },
    }}
  >
    Logout
  </Button>
</Link>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 250, fontFamily: '"Poppins", sans-serif' }
        }}
      >
       <List>
  {drawerItems.map(({ label, path }) => (
    <ListItem disablePadding key={label}>
  <ListItemButton component={Link} to={path} onClick={toggleDrawer(false)}>
    <ListItemText primary={label} />
  </ListItemButton>
</ListItem>

  ))}
</List>

      </Drawer>
      
    </>
  );
};

export default Navbar;
