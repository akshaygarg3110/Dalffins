import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

function HomePage() {

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
        </section>
    )
}

export default HomePage;