import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
    marginLeft:20,
    fontFamily: "cursive"
  },
}));



export default function Menu(props) {

  const noOfOrderItems = props.orderedItems.size;
  console.log(noOfOrderItems) ;

  const classes = useStyles();

  const history = useHistory();
  const update = () => {
    history.push("/kitchen");
}

const summary = () => {
  history.push("/summaryAndPayment");
}

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title} style={{color:"#ffc107"}}>
            Dalffins
          </Typography>
          <Button color="inherit" onClick={update}>Kitchen</Button>
          <Button color="inherit">Help</Button>
          {noOfOrderItems > 0 ? <Button color="inherit" style={{color:"#ffc107"}} onClick={summary}><b>Cart({noOfOrderItems})</b></Button> : <Button color="inherit" onClick={summary}>Cart</Button> }
          <Button color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
