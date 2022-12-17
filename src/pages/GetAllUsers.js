import { Box, Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import UserAPI from '../api/UserAPI';
import UserForm from '../components/UserForm/UserForm';
import UserNav from '../components/UserNav/UserNav';
import UserTable from '../components/UserTable/UserTable';

let GetAllUsers = () => {

    const [usersList, setUsersList] = useState([]);
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [user, setUser] = useState();

    let handleBackAction = (e) => {
        setUser(null);
        setShowForm(false);
        setShowTable(true);
    }
    let handleNewUserButton = (e) => {
        setShowForm(true);
        setShowTable(false);
    };
 
    let handleEditButton = (user) => {
        setUser(user);
        setShowTable(false);
        setShowForm(true);
    };
    useEffect(() => {
        UserAPI.getAll().then(({ data }) => {
            setUsersList(data);
        })
    }, []);

    return (
        <Box className='root-box'>
            <UserNav handleBackAction={handleBackAction}/>
            <Container>
                {showForm && <UserForm user={user}/>}
                {showTable && usersList && (<>
                    <Button variant='contained' color='success' onClick={handleNewUserButton}>Add new User</Button>
                    <UserTable data={usersList} handleEdit={handleEditButton} />
                </>)
                }
            </Container>
        </Box>
    )
}
export default GetAllUsers;