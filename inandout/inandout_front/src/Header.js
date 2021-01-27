import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100px'
  },
  appBar: {
    background: '#131313',
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

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{zIndex: 10000}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <div className={classes.button}>
            <Button color="inherit">알림</Button>
            <Button color="inherit">문의하기</Button>
            <Button color="inherit">기타등등</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}