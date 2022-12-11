import { Box, Container } from '@mui/material';
import UserNav from '../components/UserNav/UserNav';
import UserTable from '../components/UserTable/UserTable';

let GetAllUsers = () => {
    return (
        <Box className='root-box'>
            <UserNav />
            <Container>
                <UserTable />
            </Container>
        </Box>
    )
}

export default GetAllUsers;