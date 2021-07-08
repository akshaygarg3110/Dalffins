import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Times New Roman"
  },
  sticky: {
    position: "fixed",
    top: 0,
    width: "100%",
    marginLeft: "20",
    fontFamily: "cursive",
  },
}));

export default function Menu(props) {
  const noOfOrderItems = props.orderedItems.size;
  console.log(noOfOrderItems);

  const classes = useStyles();
  const history = useHistory();

  const update = () => {
    history.push("/kitchen");
  }

  const summary = () => {
    history.push("/summaryAndPayment");
  }

  const pageRefresh = () => {
    history.push("/")
  }

  const signUp = () => {
    history.push("/signup")
  }

  const login = () => {
    history.push("/login")
  }

  const onHelpClickHandler = () => {
    history.push("/help")
  }


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.sticky}>
        <Toolbar>
          <Button type="button" className={classes.title} style={{ fontSize:'23px',color: "#ffc107" }} onClick={pageRefresh}>Dalffins</Button>
          <Grid container spacing={6} style={{paddingLeft:'71%'}}>
            <Grid item xs={12}>
              <Button color="inherit" onClick={update}>Kitchen</Button>
              {noOfOrderItems > 0 ? <Button color="inherit" style={{ color: "#ffc107" }} onClick={summary}><b>Cart({noOfOrderItems})</b></Button> : <Button color="inherit" onClick={summary}>Cart</Button>}
              <Button color="inherit" onClick={signUp}>Register</Button>
              <Button color="inherit" onClick={login}>Login</Button>
            </Grid>
          </Grid>
          
          {/* <Button color="inherit" onClick={onHelpClickHandler}>
            Help
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
