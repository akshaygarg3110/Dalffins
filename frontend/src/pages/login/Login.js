import { React, useState } from 'react';
import {TextField,InputAdornment} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory,Link } from 'react-router-dom';
import { IconButton, Paper } from '@material-ui/core';
import './Login.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import PersonPinIcon from '@material-ui/icons/PersonPin';

function Login() {

    const [error, setError] = useState({
        email: false,
        password: false
    });

    const [details, setDetails] = useState({
        email: '',
        password: ''
    });

    const [errorSnakebar, setErrorSnakeBar] = useState(false);

    const history = useHistory();

    const [displayPassword, setDisplayPassword] = useState(false)

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        if (value.match(/^divyabs@gmail.com$/)) {
            setError(pre => ({ ...pre, [name]: false }))
            setDetails(pre => ({ ...pre, [name]: value }))
        }
        else {
            setError(pre => ({ ...pre, [name]: true }))
        }
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        if (value.match('abc@123$')) {
                setError(pre => ({ ...pre, [name]: false }))
            }
            else {
                setError(pre => ({ ...pre, [name]: true }))
            }
        }

    const handleClickOnSubmit = (e) => {
        e.preventDefault()
        for (const [, value] of Object.entries(error)) {
            if (value) {
                return
            }
        }
        history.push("/home")
    }

    const handleCheckedSnackBar = () => {
        setErrorSnakeBar(false)
    }

    const handlePasswordClickChange = () => {
        setDisplayPassword(!displayPassword)
    }

 
    return (
        <Container component="main" maxWidth="sm" className="mainContainer">

            <Paper elevation={5} className="inside">
           
                <form onSubmit={handleClickOnSubmit}>
                <Grid item xs={12} sm={12}>
                            <PersonPinIcon color="primary" style={{ height: '40%', width: '40%', marginLeft: '30%' }} />
                            <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '7%' }}>
                                Login
                            </Typography>
                        </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                name="email"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                size="small"
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={handleEmailChange}
                                error={error.email}
                                helperText={error.email ? 'Incorrect email id!': ''}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                variant="outlined"
                                id="password"
                                label="Password"
                                type={displayPassword ? "text" : "password"}
                                fullWidth
                                required
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                label="visibility of passwords"
                                                onClick={handlePasswordClickChange}
                                            >
                                                {displayPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                onPaste={(e) => { e.preventDefault() }}
                                onChange={handlePasswordChange}
                                error={error.password}
                                helperText={error.password ? 'Incorrect password!': ''}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit"
                                color="primary"
                                variant="contained"
                                style={{ textTransform: 'none', float: 'center', padding:"2%", width: '100px', marginLeft: '30%' }}
                            >
                            Login
                            </Button>
                        </Grid>

                        <Typography variant="h6" style={{ fontSize:'14px',textAlign: 'center', marginLeft: '25%',padding:'4%' }}>
                            <Grid item xs={12}>
                                <Link to ="/"> Forgot Password?</Link>
                            </Grid>
                        </Typography>

                        
                        <Typography variant="h6" style={{ fontSize:'17px',textAlign: 'center', marginLeft: '12%', padding:'2%'}}>
                            <Grid item xs={12}>
                            New to Dalffins?<Link to ="/"> Register here</Link>
                            </Grid>
                        </Typography>

                    </Grid>
                </form>
                <Card style={{ margin: '3%', height: '100%' }} md={2}>
                        <CardMedia
                            image="images/image.jpg"
                            title="Tiffins image"
                            style={{ height: '449px', width: '590px' }}
                        />
                </Card>
                <Snackbar open={errorSnakebar} autoHideDuration={6000} onClose={handleCheckedSnackBar}>
                    <MuiAlert elevation={6} variant="filled" onClose={handleCheckedSnackBar} severity="error">
                        Invalid Login Credentials!
                    </MuiAlert>
                </Snackbar>
            </Paper>
        </Container>
    );
}

export default Login;