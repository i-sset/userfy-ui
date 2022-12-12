import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import UserAPI from '../api/UserAPI';

import UserNav from '../components/UserNav/UserNav';
import UserTable from '../components/UserTable/UserTable';

let GetAllUsers = () => {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        UserAPI.getAll().then(( {data} ) => {
            setUsersList(data);
        })
    }, []);

    return (
        <Box className='root-box'>
            <UserNav />
            <Container>
                {usersList &&<UserTable data={usersList}/>}
            </Container>
        </Box>
    )
}

export default GetAllUsers;