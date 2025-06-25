import React, { useState } from 'react'; // ✅ import useState correctly
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Navbar() { // ✅ Component name starts with uppercase
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <div>
      {/* Background overlay for opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}
      ></div>

      {/* Navigation Toggle */}
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}>
        <IconButton onClick={toggleDrawer(true)} edge="start" aria-label="menu">
          <FontAwesomeIcon icon={faBars} />
        </IconButton>

        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: '250px' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/travel_destination" onClick={toggleDrawer(false)}>
              <ListItemText primary="Travel Destination" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;