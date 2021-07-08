import { React, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import { TextField, InputAdornment } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    inside: {
        paddingRight: "10px",
        paddingLeft:"17px",
        width: "70%",
        display: "flex",
        flexDirection: "row",
        marginTop: "0",
        marginRight: "auto",
        marginBottom: "0",
        marginLeft: "auto"
    },

    mainContainer: {
        padding: "4%", 
        display: "flex",
        justifyContent: "center",
        height: "80%",
        alignItems: "center",
        position: "relative",
        flexDirection: "column"
      }

}));

function ForgotPasswordEnterCode({ location }) {

    const classes = useStyles();

    const [enteredOtp, setEnteredOTP] = useState(0);

    const [errorSnackbar, setErrorSnackBar] = useState(false);

    const history = useHistory();

    const handleOTPChange = (e) => {

        setEnteredOTP(e.target.value)
    }

    const handleSnackBar = () => {

        setErrorSnackBar(false)
    }

    const handleClickOnCheckOTP = (e) => {
        e.preventDefault();
        if (location.state.ActualOTP === parseInt(enteredOtp)) {
            history.push("/resetPassword")
        }
        else {
            setErrorSnackBar(true)
        }
    }

    return (
        <section style={{ paddingTop: '5%'}}>
        <Container component="main" maxWidth="md" className={classes.mainContainer}>

            <Paper elevation={5} className={classes.inside}>
                
                <form onSubmit={handleClickOnCheckOTP}>
                    <Grid item xs={12} sm={12}>
                        <PersonPinIcon color="primary" style={{ height: '40%', width: '40%', marginLeft: '30%' }} />
                        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '7%' }}>
                            Forgot Password?
                        </Typography>
                        <Typography variant="h6" style={{ fontSize: "15px", textAlign: 'center', marginBottom: '7%' }}>
                            Enter the authentication code received on your registered email ID to reset your password.
                        </Typography>
                    </Grid>

                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                name="OTP"
                                id="otp"
                                label="OTP"
                                fullWidth
                                size="small"
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={handleOTPChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit"
                                color="primary"
                                variant="contained"
                                style={{ textTransform: 'none', float: 'center', padding: "2%", width: '100px', marginLeft: '30%' }}
                            >
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Card style={{ margin: '3%', height: '100%' }} md={2}>
                    <CardMedia
                        image="images/image.jpg"
                        title="Tiffins image"
                        style={{ height: '449px', width: '590px' }}
                    />
                </Card>
                <Snackbar open={errorSnackbar} autoHideDuration={6000} onClose={handleSnackBar}>
                    <MuiAlert elevation={6} variant="filled" onClose={handleSnackBar} severity="error">
                        Invalid OTP Code!
                    </MuiAlert>
                </Snackbar>
            </Paper>
        </Container>
        </section>
    );
}

export default ForgotPasswordEnterCode;