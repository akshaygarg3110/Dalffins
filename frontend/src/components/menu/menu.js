import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  dalffinsButton: {
    fontSize: "23px",
    color: "#ffc107",
  },
}));

export default function DalffinsMenu(props) {

  const classes = useStyles();

  const [profileMenu, setProfileMenu] = React.useState(null);

  const history = useHistory();

  const open = Boolean(profileMenu);

  const signUp = () => {
    history.push("/signup");
  };

  const login = () => {
    history.push("/login");
  };

  const pageRefresh = () => {
    history.push("/");
  };
  const handleClick = (event) => {
    setProfileMenu(event.currentTarget);
  };

  const handleCloseAccount = () => {
    history.push("/myAccount");
    setProfileMenu(null);
  };

  const handleCloseLogOut = () => {
    localStorage.removeItem("isAdmin");
    history.push("/login");
    localStorage.removeItem("token");
    props.setUserToken("");
    setProfileMenu(null);
  };

  const handleClose = () => {
    setProfileMenu(null);
  };

  const noOfOrderItems = props.orderedItems.size;
  console.log(noOfOrderItems);

  const update = () => {
    history.push("/kitchen");
  };

  const summary = () => {
    history.push("/summaryAndPayment");
  };

  const orderFood = () => {
    history.push("/orderfood");
  };

  const conNavBar = () => {
    if (props.userToken || localStorage.getItem("isAdmin") === "true") {
      return (
        <>
          <Button color="inherit" onClick={handleClick}>
            <PersonPinIcon className={classes.personPin} />
            Hey, {props.firstName}
          </Button>

          <Menu anchorEl={profileMenu} open={open} onClose={handleClose}>
            {!localStorage.hasOwnProperty("isAdmin") ? (
              <MenuItem onClick={handleCloseAccount}>My Account</MenuItem>
            ) : null}
            <MenuItem onClick={handleCloseLogOut}>Logout</MenuItem>
          </Menu>
        </>
      );
    }
    return (
      <>
        <Button color="inherit" onClick={signUp}>
          Register
        </Button>
        <Button color="inherit" onClick={login}>
          Login
        </Button>
      </>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Button className={classes.dalffinsButton} onClick={pageRefresh}>
            <Typography variant="h6">Dalffins</Typography>
          </Button>
          <Box className={classes.title} />
          {!localStorage.hasOwnProperty("isAdmin") ? (
            <>
              <Button color="inherit" onClick={orderFood}>
                Order food
              </Button>
              <Button color="inherit" onClick={update}>
                Kitchen
              </Button>
              {noOfOrderItems > 0 ? (
                <Button
                  color="inherit"
                  style={{ color: "#ffc107" }}
                  onClick={summary}
                >
                  <b>Cart({noOfOrderItems})</b>
                </Button>
              ) : (
                <Button color="inherit" onClick={summary}>
                  Cart
                </Button>
              )}
            </>
          ) : null}
          {conNavBar()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
