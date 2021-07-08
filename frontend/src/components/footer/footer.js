import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 20
  },
  sticky: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.sticky}>
        <Toolbar style={{ backgroundColor: "lightgrey" }}>
          <Button color="inherit" style={{fontSize:'12px',marginRight:'2%',color: "black" }}>
            Copyright © 2021 Dalffins. 
            All rights reserved.</Button>
          <Grid container spacing={6}>
            <Grid item xs={12} style={{marginLeft:'66%'}}>
              <Button color="inherit">FAQs</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact Us</Button>
              <Button color="inherit">Help</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
