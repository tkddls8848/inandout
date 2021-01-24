import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100px !important'
  },
  appBar: {
    background: '#e0e0e0',
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  button: {
    background: 'black',
    marginEnd: '20px'
  },
  fab: {
    margin: theme.spacing(1),
    background: '#0e1113'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <Button color="inherit" className={classes.button}>
            Register
          </Button>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}