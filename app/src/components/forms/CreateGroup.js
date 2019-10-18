import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from "../assets/logo.svg";
import ReactSVG from 'react-svg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderBottom: "2px solid #ccc",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "& > *":{
      // Section general
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "&:first-child":{
        // Left
        justifyContent: "flex-start",
        
      },
      "&:last-child":{
        // Right
        justifyContent: "flex-end",
      }
    }
  },
  logoWrapper: {
    display: "block",
    width: "100%",
    maxWidth: "25px",
    overflow: "hidden",
    marginRight: 15,
    "& > *": {
      objectFit: "contain"
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="inherit">
      <Toolbar className={classes.toolBar}>
        <section>
          <div className={classes.logoWrapper}>
            <ReactSVG 
            src={logo} 
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 100%; height: 100%')
            }} 
            alt="Logo" />
          </div>
          <Typography variant="h6"  className={classes.title}>
            Gather
          </Typography>
        </section>
        <section>
          <Button color="inherit">Login</Button>
        </section>
      </Toolbar>
    </AppBar>
  );
}