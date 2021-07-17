import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

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
    width: "100%",
  },
  typoText: {
    fontSize: '14px',
    color: "white"
  },
  footerButtons: {
    marginLeft: '66%'
  },
}));

export default function Menu() {

  const classes = useStyles();

  const history = useHistory();

  const onHelpClickHandler = () => {
    history.push("/help")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.sticky}>
        <Toolbar>
          <Typography variant='caption' className={classes.typoText}>
            Copyright © 2021 Dalffins.
            All rights reserved.
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} classNam={classes.footerButtons}>
              <Button color="inherit">FAQs</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact Us</Button>
              <Button color="inherit" onClick={onHelpClickHandler}>Help</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
