import React from 'react';
import Button from '@material-ui/core/Button'
import { AppBar, Toolbar, IconButton, Typography, ButtonGroup } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAlignJustify,  faAmericanSignLanguageInterpreting} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
function Linking() {
  return (
    <div className="App">
    <AppBar position="static">
    <Toolbar>
    <IconButton><FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} id="logo2" /></IconButton>
    <Typography variant="h6" id="logo1">Welcome</Typography>
    <label for="toggle"><FontAwesomeIcon  icon={faAlignJustify} id="test" ></FontAwesomeIcon>
    </label>
    <input type="checkbox" id="toggle"></input>
    <div  id="dj">
    <Button id="shanu"><NavLink to="/" exact activeStyle={{color:'White',borderBottom: '1px solid oldlace',fontFamily: 'cursive',fontSize:'20px'}} style={{color:'black'}} id="one">Home</NavLink>
    </Button>
    <Button  id="shanu"><NavLink to="/About" exact activeStyle={{color:'White',borderBottom: '1px solid oldlace',fontFamily: 'cursive',fontSize:'20px'}} style={{color:'black'}} id="one">About Us</NavLink>
    </Button>
    <Button  id="shanu" ><NavLink to="/Contact" exact activeStyle={{color:'White',borderBottom: '1px solid oldlace',fontFamily: 'cursive',fontSize:'20px'}} style={{color:'black'}} id="one">Contact Us</NavLink>
    </Button>
    <Button  id="shanu"><NavLink to="/Info" exact activeStyle={{color:'White',borderBottom: '1px solid oldlace',fontFamily: 'cursive',fontSize:'20px'}} style={{color:'black'}} id="one">Info</NavLink>
    </Button>
    </div>
    </Toolbar>
</AppBar>


    </div>
  );
  }

export  default Linking;
