import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import {userTabs } from "../constants/index";


const Menu = ({ children }) => {
  const { window } = children;
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabsUserOrAdmin = () => { 
    return userTabs;
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Smart Weather
      </Typography>
      <Divider />
      <List>
        {tabsUserOrAdmin().map((item, index) => (
          <ListItem
            button
            key={index.toString()}
            component={Link}
            to={item.url}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar style={{background: "#e57373" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: '#e3f2fd' } }}
          >
            Smart Weather App
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {tabsUserOrAdmin().map((item, index) => (
              <Button
                key={index.toString()}
                sx={{ color: '#e3f2fd' }}
                component={Link}
                to={item.url}>
                  {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography paragraph>{children}</Typography>
      </Box>
    </Box>
  );
}

Menu.propTypes = {
  window: PropTypes.func,
};
export default Menu;
