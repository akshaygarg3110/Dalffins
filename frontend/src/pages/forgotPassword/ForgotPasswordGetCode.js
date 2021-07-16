//Author: Divyashree Bangalore Subbaraya (B00875916)
import { React, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import { TextField, InputAdornment } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import emailJSDetails from '../../utils/email';
import * as emailjs from 'emailjs-com';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({

    inside: {
        paddingRight: "10px",
        paddingLeft: "17px",
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

function ForgotPasswordGetCode(props) {

    const history = useHistory();

    const classes = useStyles();

    const [email, setEmail] = useState('')

    const [error, setError] = useState({
        errorSnackbar: false
    });


    const api_emailCheck_url = 'http://localhost:8080/user/emailCheck';

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClickOnGetCode = (e) => {
        e.preventDefault();
        axios.post(api_emailCheck_url, {
            email: email
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.status === 200) {
                    props.setUserId(response.data.id)
                    const randomNumber = Math.floor(1000 + Math.random() * 9000);
                    console.log(randomNumber)
                    emailjs.send(emailJSDetails.serviceId, emailJSDetails.templateID, {
                        to_name: response.data.firstName,
                        otp: randomNumber,
                        to_email: response.data.email,
                        reply_to: "otpdalffins@gmail.com",
                    }, emailJSDetails.userId).then((result) => {
                        console.log("get")
                        console.log(response.data.email)
                        history.push("/forgotPasswordEnterCode", {'ActualOTP': randomNumber, passwordEntry: true, 'Email':  response.data.email})
                    },
                        (error) => {
                            alert("An error occurred, Please try again", error.text);
                            history.push('/forgotPassword')
                        });
                }
            }).catch(function (error) {
                setError(pre => ({ ...pre, errorSnackbar: true }))
            })
    }

    const handleErrorSnackBar = () => {
        setError(pre => ({ ...pre, snackbar: false }))
    }

    return (
        <section style={{ paddingTop: '5%' }}>

            <Container component="main" maxWidth="lg" className={classes.mainContainer}>

                <Paper elevation={6} className={classes.inside}>
                    <form onSubmit={handleClickOnGetCode}>
                        <Grid item xs={12} sm={12}>
                            <PersonPinIcon color="primary" style={{ height: '40%', width: '40%', marginLeft: '30%' }} />
                            <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '7%' }}>
                                Forgot Password?
                            </Typography>
                            <Typography variant="h6" style={{ fontSize: "15px", textAlign: 'center', marginBottom: '7%' }}>
                                Enter the email ID associated with Dalffins account and we will send an email notification to reste your password.
                            </Typography>
                        </Grid>

                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={12}>
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
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <Button type="submit"
                                    color="primary"
                                    variant="contained"
                                    style={{ textTransform: 'none', float: 'center', padding: "2%", width: '100px', marginLeft: '30%' }}
                                >
                                    Get Code
                                </Button>
                                <Snackbar open={error.errorSnackbar} autoHideDuration={6000} onClose={handleErrorSnackBar}>
                                    <MuiAlert elevation={6} variant="filled" onClose={handleErrorSnackBar} severity="error">
                                        Email ID not registered! You can register <Link to="/signUp" style={{color:"white"}}> here </Link>
                                    </MuiAlert>
                                </Snackbar>
                            </Grid>
                        </Grid>
                    </form>

                    <Card style={{ margin: '3%', height: '100%' }} md={2}>
                        <CardMedia
                            image="images/tiffinsImage.jpg"
                            title="Tiffins image"
                            style={{ height: '449px', width: '590px' }}
                        />
                    </Card>

                </Paper>
            </Container>
        </section>
    );
}

export default ForgotPasswordGetCode;