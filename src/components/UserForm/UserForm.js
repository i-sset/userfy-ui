import { Container, FormControl, FormGroup, InputLabel, TextField, Typography, Input, Button } from "@mui/material";
import { useState } from "react";
import './UserForm.css'

const UserForm = ({ user }) => {
    let pageTitle = user == null ? 'Add New User' : 'Update Existent User';
    let [firstname, setFirstname] = useState(user?.firstname || '');
    let [lastname, setLastname] = useState(user?.lastname || '');

    let [email, setEmail] = useState(user?.email || '');
    let [age, setAge] = useState(user?.age || 0);

    let handleFirstname = (e) => {
        setFirstname(e.target.value);
    };
    let handleLastname = (e) => {
        setLastname(e.target.value);
    };
    let handleEmail = (e) => {
        setEmail(e.target.value);
    };
    let handleAge = (e) => {
        setAge(parseInt(e.target.value));
    };

    return <Container className="user-container">
        <Typography variant="h2" marginBottom={5}>{pageTitle}</Typography>
        <form className="user-form">
            <div className="form-row__name">
                <FormControl className="form-control">
                    <TextField id="firstname" label="First Name" onChange={handleFirstname} value={firstname} />
                </FormControl>
                <FormControl>
                    <TextField id="lastname" label="Last Name" onChange={handleLastname} value={lastname} />
                </FormControl>
            </div>

            <FormControl className="form-control form-field__fullwidth">
                <TextField id="email" label="Email" type="email" onChange={handleEmail} value={email} />
            </FormControl>
            
            <FormControl className="form-control form-field__age">
                <TextField id="age" label="Age" type="number" onChange={handleAge} value={age} />
            </FormControl>

            <Button variant="contained" color="success" className="form-button">Submit</Button>
        </form >
    </Container >
}


export default UserForm;