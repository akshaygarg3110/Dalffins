import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Grid, MenuItem } from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Menu from '@material-ui/core/Menu';

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
    fontFamily: "cursive"
  },
}));

export default function DalffinsMenu(props) {

  const [profileMenu, setProfileMenu] = React.useState(null);

  const classes = useStyles();

  const history = useHistory();
  
  const open = Boolean(profileMenu);

  const handleClick = (event) => {
    setProfileMenu(event.currentTarget);
  };

  const handleCloseAccount = () => {
    history.push("/myAccount")
    setProfileMenu(null);
  };

  const handleCloseLogOut = () => {
    history.push("/login")
    setProfileMenu(null);
  };

  const handleClose = () => {
    setProfileMenu(null);
  };

  const noOfOrderItems = props.orderedItems.size;
  console.log(noOfOrderItems);

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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.sticky}>
        <Toolbar>
          <Button type="button" className={classes.title} style={{ fontSize: '23px', color: "#ffc107" }} onClick={pageRefresh}>Dalffins</Button>
          <Grid container spacing={6} style={{ paddingLeft: '65%' }}>
            <Grid item xs={12}>
              <Button color="inherit" onClick={update}>Kitchen</Button>
              {noOfOrderItems > 0 ? <Button color="inherit" style={{ color: "#ffc107" }} onClick={summary}><b>Cart({noOfOrderItems})</b></Button> : <Button color="inherit" onClick={summary}>Cart</Button>}
              <Button color="inherit" onClick={signUp}>Register</Button>
              <Button color="inherit" onClick={login}>Login</Button>
              <Button color="inherit" onClick={handleClick}>
                <PersonPinIcon fontSize="large" style={{ color: "white" }}/>
              </Button>

              <Menu
                anchorEl={profileMenu}
                open={open}
                onClose={handleClose}
                
              >
                <MenuItem onClick={handleCloseAccount} >My Account</MenuItem>
                <MenuItem onClick={handleCloseLogOut}>Logout</MenuItem>

              </Menu>

            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}
