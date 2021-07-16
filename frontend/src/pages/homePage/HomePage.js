//Author: Divyashree Bangalore Subbaraya (B00875916)
import React, { useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useLocation, useHistory } from "react-router-dom";

function HomePage() {

    const [snackBar, setSnackBar] = useState(false)

    const handleSnackBar = () => {
        setSnackBar(false)
    }

    const location = useLocation();

    const history = useHistory();

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
        <section style={{ paddingTop: '5%', backgroundImage: 'linearGradient(red, yellow)' }}>
            <Container component="main" maxWidth="sm" className="mainContainer" >
                <Card style={{ margin: '3%', height: '100%' }} md={2}>
                    <CardMedia
                        image="images/tiffinsImage.jpg"
                        title="Tiffins image"
                        style={{ height: '449px', width: '590px' }}
                    />
                </Card>

            </Container>
            <Snackbar open={snackBar} autoHideDuration={6000} onClose={handleSnackBar}>
                <MuiAlert elevation={6} variant="filled" onClose={handleSnackBar} severity="success">
                    Registered Successfully!
                </MuiAlert>
            </Snackbar>
        </section>
    )
}

export default HomePage;