//Author: Divyashree Bangalore Subbaraya (B00875916)
import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    question: {
        fontSize: '20px',
        fontWeight: 'regular',
        fontFamily: '"Times New Roman", Times, serif'
    },

    answer:{
        fontSize: '18px',
        fontWeight: 'regular',
        fontFamily: '"Times New Roman", Times, serif'
    },

    section: {
        paddingTop: '10%'
    },
    typoFAQ: {
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'bolder',
        fontFamily: '"Times New Roman", Times, serif'
    },
    accordion: {
        width: '100%'
    },
    detailHeading: {
        fontSize: '22px',
        fontWeight: 'bold',
        paddingBottom: '1%',
        fontFamily: '"Times New Roman", Times, serif'
    },
    paper: {
        padding: '30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1%',
        marginRight: '7%',
        marginBottom: '0',
        marginLeft: 'auto'
    },

    mainContainer: {
        padding: "40px",
        paddingBottom: '12%',
        display: 'flex',
        justifyContent: 'center',
        height: '80%',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column'
    }
}));

function FAQs() {

    const classes = useStyles();

    // Render the FAQs us page on the click of FAQs button on footer
    return ( 
        <section className={classes.section}>
            <Typography className={classes.typoFAQ}>
                FAQs
            </Typography>
            <Container component="main" maxWidth="md" className={classes.mainContainer}>
                <Paper elevation={5} className={classes.paper}>

                    <div className={classes.root}>
                        <Typography className={classes.detailHeading}>
                            General
                        </Typography>
                        <Accordion className={classes.accordion} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.question}>
                                    What is Dalffins?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography className={classes.answer}>
                                 ‘Dalffins’ is an online tiffins system that provides its end users 
                                 to sell and order food in a much easy, healthier, and efficient manner.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={classes.accordion} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.question}>
                                    What is that one unique aspect of Dalffins?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography className={classes.answer}>
                                 ‘Dalffins’ is the only application that has provided the flexibility and opportunity for students 
                                  to earn from their Culinary skills. 
                                 </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        <br></br>

                        <Typography className={classes.detailHeading}>
                            Managing your account
                        </Typography>
                        <Accordion className={classes.accordion} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.question}>How to reset my forgotten password?</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    If you forgot your password, click <Link to="/forgotPassword"> here</Link> to reset it. You will then need to provide your registered email address so that we can send you an email that will allow you to reset your password.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.question}>
                                    I got a new phone number. How to update in Dalffins?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography >
                                    If you want to update your phone number,
                                    click on <Link to="/myAccount"> My Account</Link> option from the drop-down menu of profile logo on the navigational bar,
                                    to update your phone number.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.question}>
                                    I want to change my first name. How to update in Dalffins?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography >
                                    If you want to update your first name,
                                    click on <Link to="/myAccount"> My Account</Link> option from the drop-down menu of profile logo on the navigational bar,
                                    to update your first name.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.question}>
                                    I want to change my last name. How to update in Dalffins?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography >
                                    If you want to update your first name,
                                    click on <Link to="/myAccount"> My Account</Link> option from the drop-down menu of profile logo on the navigational bar,
                                    to update your last name.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Paper>
            </Container>
        </section>
    );
}

export default FAQs;