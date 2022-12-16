import { Box, Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserAPI from '../api/UserAPI';
import UserForm from '../components/UserForm/UserForm';
import UserNav from '../components/UserNav/UserNav';
import UserTable from '../components/UserTable/UserTable';

let GetAllUsers = () => {

    const [usersList, setUsersList] = useState([]);
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(false);

    let handleNewUserButton = (e) => {
        setShowForm(true);
        setShowTable(false);
    };

    useEffect(() => {
        UserAPI.getAll().then(({ data }) => {
            setUsersList(data);
        })
    }, []);

    return (
        <Box className='root-box'>
            <UserNav />
            <Container>
                {showForm && <UserForm />}
                {showTable && usersList && (<>
                    <Button variant='contained' color='success' onClick={handleNewUserButton}>Add new User</Button>
                    <UserTable data={usersList} />
                </>)
                }
            </Container>
        </Box>
    )
}
export default GetAllUsers;