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
    const [fetchFlag, setFetchFlag] = useState(false);

    let handleBackAction = (shouldFetch) => {
        setUser(null);
        setShowForm(false);
        setShowTable(true);
        setFetchFlag(shouldFetch);
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

    let handleDeleteButton = (shouldFetch) => {
        setFetchFlag(shouldFetch);
    }
    useEffect(() => {
        UserAPI.getAll().then(({ data }) => {
            setUsersList(data);
        })
    }, [fetchFlag]);

    return (
        <Box className='root-box'>
            <UserNav handleBackAction={handleBackAction}/>
            <Container>
                {showForm && <UserForm user={user} handleBackAction={handleBackAction}/>}
                {showTable && usersList && (<>
                    <Button variant='contained' color='success' onClick={handleNewUserButton}>Add new User</Button>
                    <UserTable data={usersList} handleEdit={handleEditButton} handleDelete={handleDeleteButton}/>
                </>)
                }
            </Container>
        </Box>
    )
}
export default GetAllUsers;