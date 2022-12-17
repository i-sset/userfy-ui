import { Container, FormControl, FormGroup, InputLabel, TextField, Typography, Input, Button } from "@mui/material";
import { useState } from "react";
import './UserForm.css'
import UserAPI from "../../api/UserAPI";

const UserForm = ({ user, handleBackAction }) => {
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

    let handleSubmit = (e) => {
        if (user != null) {
            let updatedUser = {
                id: parseInt(user.id),
                firstname,
                lastname,
                email,
                age: parseInt(age)
            };
            UserAPI.update(updatedUser)
            .then(response => {
                if (response.status == 200) {
                    handleBackAction(true);
                }
            })
        } else {
            let createUser = {
                firstname,
                lastname,
                email,
                age: parseInt(age)
            };
            UserAPI.insert(createUser)
            .then(response => {
                if (response.status == 201) {
                    handleBackAction(true);
                }
            })
        }
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

            <Button variant="contained" color="success" className="form-button" onClick={handleSubmit}>Submit</Button>
        </form >
    </Container >
}


export default UserForm;