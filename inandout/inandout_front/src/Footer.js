import React from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton , Container} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: 5,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0
  },
  appBar: {
    background: '#111111',
    boxShadow: 'none'
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    color: 'white',
    float: "right"
  },
  fab: {
    margin: theme.spacing(1),
    background: '#0e1113'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
        <AppBar position="relative" style={{zIndex: 10000}}>
          <Container maxWidth="100%">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Developed by PSI
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  )
}