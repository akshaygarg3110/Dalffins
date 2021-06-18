import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft:20
  },
}));

const update = () => {
  history.push('/kitchen');
}

export default function Menu() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Dalffins
          </Typography>
          <Button color="inherit" onClick="update">Kitchen</Button>
          <Button color="inherit">Help</Button>
          <Button color="inherit">Cart</Button>
          <Button color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
