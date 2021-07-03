import { React, useState } from 'react';
import Container from '@material-ui/core/Container';
import './ForgotPassword.css';
import Grid from '@material-ui/core/Grid';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import { TextField, InputAdornment } from '@material-ui/core';
import { IconButton, Paper } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

function ForgotPassword() {

    const [error, setError] = useState({
        email: false
    });

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        if (value.match(/^divyabs@gmail.com$/)) {
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
        //history.push("/home")
    }

    return (
        <Container component="main" maxWidth="md" className="mainContainer">

            <Paper elevation={5} className="inside">
                <form onSubmit={handleClickOnSubmit}>
                    <Grid item xs={12} sm={12}>
                        <PersonPinIcon color="primary" style={{ height: '40%', width: '40%', marginLeft: '30%' }} />
                        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '7%' }}>
                            Forgot Password?
                        </Typography>
                        <Typography variant="h6" style={{ fontSize:"15px",textAlign: 'center', marginBottom: '7%' }}>
                            Enter the email ID associated with Dalffins account and we will send an email notification to reste your password.
                        </Typography>
                    </Grid>

                    <Grid container spacing={6}>
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
                                helperText={error.email ? 'Incorrect email id!' : ''}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit"
                                color="primary"
                                variant="contained"
                                style={{ textTransform: 'none', float: 'center', padding: "2%", width: '100px', marginLeft: '30%' }}
                            >
                                Get Code
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

            </Paper>
        </Container>
    );
}

export default ForgotPassword;