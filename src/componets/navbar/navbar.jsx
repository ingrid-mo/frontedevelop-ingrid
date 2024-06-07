import { NavLink } from "react-router-dom";
import "./navbar.css";
import { RiHome7Fill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { LuBrainCog } from "react-icons/lu";
import { MdContacts } from "react-icons/md";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const drawerWidth = 240;

function DrawerAppBar() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'  }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/Group%20179.png?alt=media&token=8eebf155-3512-4edc-a8ec-9c1b0e08d3f4" alt="icono mio" />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <NavLink to="/" className="list_nav">
              <RiHome7Fill /> Inicio
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <NavLink to="/SobreMi" className="list_nav">
              <AiOutlineStar /> Sobre mi
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <NavLink to="/Proyecto" className="list_nav">
              <LuBrainCog /> Proyectos
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <NavLink to="/Contactame" className="list_nav">
              <MdContacts /> Contáctame
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'flex', background:' #372e4980 !important' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img className="nav_icon" src="https://firebasestorage.googleapis.com/v0/b/portafolio-7e72a.appspot.com/o/Group%20179.png?alt=media&token=8eebf155-3512-4edc-a8ec-9c1b0e08d3f4" alt="icono mio" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
              <NavLink to="/" className="list_nav">
                <RiHome7Fill /> Inicio
              </NavLink>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <NavLink to="/SobreMi" className="list_nav">
                <AiOutlineStar /> Sobre mi
              </NavLink>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <NavLink to="/Proyecto" className="list_nav">
                <LuBrainCog /> Proyectos
              </NavLink>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <NavLink to="/Contactame" className="list_nav">
                <MdContacts /> Contáctame
              </NavLink>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {mobileOpen && (
        <Box
          sx={{
            width: drawerWidth,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)', // Fondo semitransparente
            zIndex: 1200, // Asegurando que se superponga a otros elementos
            backdropFilter: 'blur(10px)', // Agregar desenfoque de fondo
            padding: 2, // Espaciado interno para un mejor diseño
          }}
          onClick={handleDrawerToggle}
        >
          {drawer}
        </Box>
      )}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
