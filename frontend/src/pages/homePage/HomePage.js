//Author: Divyashree Bangalore Subbaraya (B00875916)
import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    inside: {
        paddingRight: "10px",
        paddingLeft: "17px",
        paddingBottom: '10px',
        paddingTop: '5px',
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
    },

    card: {
        margin: '3%',
        height: '100%'
    },

    cardMedia: {
        height: '449px',
        width: '590px'
    },

    section: {
        paddingTop: '5%',
        backgroundImage: 'linearGradient(red, yellow)'
    }

}));


function HomePage() {

    const [snackBar, setSnackBar] = useState(false)

    const location = useLocation();

    const history = useHistory();

    const classes = useStyles();

    const handleSnackBar = () => {
        setSnackBar(false)
    }

    useEffect(() => {
        const home = () => {
            if (location.state) {
                setSnackBar(location.state.register);
                history.replace('/home', {})
            }
        }
        home();
    }, []);

    return (
        <section className={classes.section}>
            <Container component="main" maxWidth="sm" className={classes.mainContainer}>
                <Paper elevation={6} className={classes.inside}>
                    <Card className={classes.card} md={2}>
                        <CardMedia
                            image="images/tiffinsImage.jpg"
                            title="Tiffins image"
                            className={classes.cardMedia}
                        />
                    </Card>

                    <Snackbar open={snackBar} autoHideDuration={6000} onClose={handleSnackBar}>
                        <MuiAlert elevation={6} variant="filled" onClose={handleSnackBar} severity="success">
                            Registered Successfully!
                        </MuiAlert>
                    </Snackbar>
                </Paper>
            </Container>
        </section>
    )
}

export default HomePage;