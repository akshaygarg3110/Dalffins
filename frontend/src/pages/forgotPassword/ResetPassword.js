import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import 'react-phone-input-2/lib/bootstrap.css'
import { IconButton, Paper } from '@material-ui/core';
import { TextField, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles((theme) => ({

    inside: {
        paddingRight: "10px",
        paddingLeft: "17px",
        paddingBottom:'10px',
        paddingTop:'5px',
        width: "50%",
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
        height: "60%",
        alignItems: "center",
        position: "relative",
        flexDirection: "column"
    }

}));

function ResetPassword() {

    const classes = useStyles();

    const [password, setPassword] = useState("")

    const [displayPassword, setDisplayPassword] = useState(false)

    const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false)

    const history = useHistory();

    const [error, setError] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleClickOnSubmit = (e) => {
        e.preventDefault()
        for (const [, value] of Object.entries(error)) {
            if (value) {
                return
            }
        }
        history.push("/home")
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        if (password.match('^[a-zA-Z0-9!@#$&()\\-`.+,/"]*$')) {
            if (password.length + 1 > 7) {
                setError(pre => ({ ...pre, [name]: false }))
            }
            else {
                setError(pre => ({ ...pre, [name]: true }))
            }
        }
        setPassword(value)
    }

    const handleConfirmPasswordChange = (e) => {
        const { name, value } = e.target;
        if (password === value) {
            setError(pre => ({ ...pre, [name]: false }))
        }
        else {
            setError(pre => ({ ...pre, [name]: true }))
        }

    }

    const handlePasswordClickChange = () => {
        setDisplayPassword(!displayPassword)
    }

    const handleConfirmPasswordClickChange = () => {
        setDisplayConfirmPassword(!displayConfirmPassword)
    }

    return (
        <section style={{ paddingTop: '5%' }}>

            <Container component="main" maxWidth="lg" className={classes.mainContainer}>
                <Paper elevation={6} className={classes.inside}>

                    <form onSubmit={handleClickOnSubmit}>

                        <Grid item xs={12} sm={12}>
                            <PersonPinIcon color="primary" style={{ height: '40%', width: '40%', marginLeft: '30%' }} />
                            <Typography variant="h6" style={{ textAlign: 'center', marginBottom: '20%' }}>
                                Reset Password
                            </Typography>
                        </Grid>

                        <Grid container spacing={6}>

                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    id="password"
                                    label="Password"
                                    type={displayPassword ? "text" : "password"}
                                    fullWidth
                                    required
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
                                    helperText={error.password ? 'Minimum of 8 characters!' : ''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    label="Confirm Password"
                                    type={displayConfirmPassword ? "text" : "password"}
                                    fullWidth
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    label="visibility of passwords"
                                                    onClick={handleConfirmPasswordClickChange}
                                                >
                                                    {displayConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleConfirmPasswordChange}
                                    error={error.confirmPassword}
                                    helperText={error.confirmPassword ? 'Passwords do not match' : ''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit"
                                    color="primary"
                                    variant="contained"
                                    style={{ textTransform: 'none', marginLeft:'25%'}}
                                    OnClick={handleClickOnSubmit}>
                                    Reset Password
                                </Button>
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
    )
}
export default ResetPassword;