import React, { useState } from 'react'
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonIcon from '@material-ui/icons/Person';

import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './Header.style' 

const Header = () => {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => toggleMenu()} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Seven INC
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={menuOpen} onClose={() => toggleMenu()}>
        <List>
          <ListItem button component={Link} to="/" onClick={() => toggleMenu()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/employees" onClick={() => toggleMenu()}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Lista de Funcionarios</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/employees/cadastro" onClick={() => toggleMenu()}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de Funcionarios</ListItemText>
          </ListItem>
        </List>
      </Drawer>

    </>
  )
}

export default Header