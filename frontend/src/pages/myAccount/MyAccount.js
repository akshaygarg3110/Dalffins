//Author: Divyashree Bangalore Subbaraya (B00875916)
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Paper } from '@material-ui/core';
import { TextField, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Checkbox from '@material-ui/core/Checkbox';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MuiPhoneNumber from 'material-ui-phone-number';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

    inside: {
        paddingRight: "26px",
        paddingLeft: "17px",
        paddingBottom: "25px",
        width: "80%",
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

function MyAccount(props) {

    const classes = useStyles();

    const history = useHistory();

    const api_profile_url = `http://localhost:8080/user/userProfile/${props.userId}`;

    const api_update_profile_url = `http://localhost:8080/user/updateProfile/${props.userId}`;

    const api_delete_url = `http://localhost:8080/user/deleteProfile/${props.userId}`;
    
    useEffect(() => {
        async function userData() {
            await axios.get(api_profile_url).then((res) => {
                setDetail({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    phoneNumber: res.data.phoneNumber
                })
                setEditDetail({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    phoneNumber: res.data.phoneNumber
                })
            })
        };
        userData();

    }, [api_profile_url]);

    const [error, setError] = useState(false);

    const [disabled, setDisabled] = useState(true);

    const [detail, setDetail] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        snackbar: false,
        checkbox: false
    });

    const [editDetail, setEditDetail] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [open, setOpen] = React.useState(false);

    const [editPopUpName, setEditPopUpName] = React.useState('First Name');

    const [editPopUpLabelName, setEditPopUpLabelName] = React.useState('firstName');

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (!error) {
            setOpen(false);
            axios.put(api_update_profile_url, {
                email: editDetail.email,
                firstName: editDetail.firstName,
                lastName: editDetail.lastName,
                phoneNumber: editDetail.phoneNumber
            }, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then((response) => {
                    if (response.status === 200) {
                        setDetail(pre => ({ ...pre, [editPopUpLabelName]: editDetail[editPopUpLabelName] }))
                    }
                })
        };
    };

    const handleDeleteClick = ()=>{
        axios.delete(api_delete_url).then((res)=>{
            if(res.status===200){
                history.push("/home")
            }
        })
    }
    const handleCheckedBoxChange = () => {
        setDetail(pre => ({ ...pre, checkbox: !detail.checkbox }))
        setDisabled(detail.checkbox)
    }

    const handlePhoneNumberChange = (e) => {
        const { value } = e.target;
        setDetail(pre => ({ ...pre, phoneNumber: value }))
    }

    const handleClickOnFnameEdit = () => {
        setEditPopUpName('First Name');
        setEditPopUpLabelName('firstName');
        setOpen(true);
    }

    const handleClickOnLnameEdit = () => {
        setEditPopUpName('Last Name')
        setEditPopUpLabelName('lastName')
        setOpen(true);
    }

    const handleClickOnEmailEdit = () => {
        setEditPopUpName('Email')
        setEditPopUpLabelName('email')
        setOpen(true);
    }

    const handleClickOnPhoneEdit = () => {
        setEditPopUpName('Phone Number')
        setEditPopUpLabelName('phoneNumber')
        setOpen(true);
    }

    const handleDone = () => {
        history.push("/home")
    }

    const handlePopUpChange = (e) => {

        const { name, value } = e.target;

        if ((value.match(/^[ 0-9a-zA-Z]+$/) && name.includes('Name')) ||
            (value.match(/^\S+@\S+\.\S{2,}$/) && name === "email") || (name === 'phoneNumber')) {
            setError(false)
            setEditDetail(pre => ({ ...pre, [name]: value }))
        }
        else {
            setError(true)
        }
    }

    const editTextFieldChange = (textField) => {
        if (textField === 'phoneNumber') {
            return (
                <MuiPhoneNumber
                    name="phoneNumber"
                    id="phoneNumber1"
                    defaultCountry={"ca"}
                    disableAreaCodes={true}
                    variant="outlined"
                    onlyCountries={["ca"]}
                    label="Phone Number"
                    fullWidth
                    required
                    onChange={phone => handlePopUpChange({ target: { value: phone, name: 'phoneNumber' } })}
                />
            )
        }
        else {
            return (
                <TextField
                    autoFocus
                    error={error}
                    defaultValue={detail[textField]}
                    margin="dense"
                    id={editPopUpName}
                    name={textField}
                    label={`New ${editPopUpName}`}
                    helperText={error ? 'Incorrect Entry' : ''}
                    fullWidth
                    onChange={handlePopUpChange} />
            )
        }
    }

    const editPopUp = () => (<div>

        <Dialog fullWidth={true}
            maxWidth="xs" open={open} onClose={handleClose}>
            <DialogTitle> Edit Account details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You can edit your {editPopUpName} below. Be sure to click on "Save" to save your changes.
                </DialogContentText>

                {editTextFieldChange(editPopUpLabelName)}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    </div>)

    return (
        <section style={{ paddingTop: '5%' }}>
            <Container component="main" maxWidth="lg" className={classes.mainContainer}
                style={{ marginBottom: '25px' }}>

                {editPopUp()}

                <Paper elevation={3} className={classes.inside}>
                    <Card style={{ margin: '3%' }} md={6}>
                        <CardMedia
                            image="images/tiffinsImage.jpg"
                            title="Tiffins image"
                            style={{ height: '100%', width: '400px' }}
                        />
                    </Card>
                    <Grid container spacing={3}
                        mx="auto"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <Grid item xs={12}>
                            <PersonPinIcon color="primary" style={{ height: '20%', width: '40%', marginLeft: '30%' }} />
                            <Typography variant="h5" style={{ textAlign: 'center' }}>
                                My Account
                            </Typography>
                        </Grid>

                        <Grid item md={8} xs={12} style={{ marginLeft: '10%' }}>
                            <TextField
                                name="firstName"
                                variant="outlined"
                                id="firstName"
                                label="First Name"
                                value={detail.firstName}
                                fullWidth
                                required
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />

                        </Grid>
                        <Grid item md={2} xs={12}>

                            <Button
                                color="primary"
                                variant="contained" onClick={handleClickOnFnameEdit}>
                                Edit
                            </Button>

                        </Grid>


                        <Grid item md={8} xs={12} style={{ marginLeft: '10%' }}>
                            <TextField
                                name="lastName"
                                variant="outlined"
                                id="lastName"
                                fullWidth
                                required
                                label="Last Name"
                                placeholder="Last Name"
                                value={detail.lastName}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item md={2} xs={12}>

                            <Button
                                color="primary"
                                variant="contained" onClick={handleClickOnLnameEdit}>
                                Edit
                            </Button>

                        </Grid>


                        <Grid item md={8} xs={12} style={{ marginLeft: '10%' }}>
                            <TextField
                                variant="outlined"
                                name="email"
                                id="email"
                                label="Email"
                                type="email"
                                value={detail.email}
                                placeholder="Email"
                                fullWidth
                                required
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item md={2} xs={12}>

                            <Button
                                color="primary"
                                variant="contained" onClick={handleClickOnEmailEdit}>
                                Edit
                            </Button>

                        </Grid>

                        <Grid item xs={12} md={8} style={{ marginLeft: '10%' }}>
                            <MuiPhoneNumber
                                name="phoneNumber"
                                id="phoneNumber"
                                value={detail.phoneNumber}
                                defaultCountry={"ca"}
                                disableAreaCodes={true}
                                variant="outlined"
                                onlyCountries={["ca"]}
                                label="Phone Number"
                                fullWidth
                                required
                                onChange={phone => handlePhoneNumberChange({ target: { value: phone, name: 'phoneNumber' } })}
                            />
                        </Grid>
                        <Grid item md={2} xs={12}>

                            <Button
                                color="primary"
                                variant="contained" onClick={handleClickOnPhoneEdit}>
                                Edit
                            </Button>

                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit"
                                color="primary"
                                variant="contained"
                                onClick={handleDone}
                                style={{ textTransform: 'none', float: 'center', padding: "2%", width: '100px', marginLeft: '40%' }}
                            >
                                Done
                            </Button>
                        </Grid>


                        <Grid item xs={12}>
                            <Typography variant="h6" style={{ justifyContent: 'flex-start', marginLeft: '2%', fontSize: '20px' }}>
                                Delete Account
                                <DeleteIcon color="black" style={{ marginLeft: '1%' }} />
                            </Typography>

                            <Checkbox
                                name="checkbox"
                                checked={detail.checkbox}
                                size="small"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                onChange={handleCheckedBoxChange}
                            />
                            <Typography variant='caption' style={{ fontSize: '14px' }}>
                                Yes, I agree to delete my Dalffins account and its associated data
                            </Typography>

                            <Button type="submit"
                                color="primary"
                                variant="contained"
                                disabled={disabled}
                                onClick={handleDeleteClick}
                                style={{ width: '30%', marginLeft: '1.5%' }}
                            >
                                Delete Account
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </section>
    )
}

export default MyAccount;
