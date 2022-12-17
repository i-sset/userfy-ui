import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './UserTable.css';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
let UserTable = ({ data, handleEdit, handleDelete }) => {

  let handleEditButton = (e) => {
    let user = retrieveUserFromTable(e.target);
    handleEdit(user);
  };

  function renderRows() {
    return data.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{item.ID}</TableCell>
          <TableCell>{item.Firstname}</TableCell>
          <TableCell>{item.Lastname}</TableCell>
          <TableCell>{item.Email}</TableCell>
          <TableCell>{item.Age}</TableCell>
          <TableCell>
            <Button color='error' startIcon={<Delete />}>Delete</Button>
            <Button color='info' startIcon={<Edit />} onClick={handleEditButton}>Edit</Button>
          </TableCell>
        </TableRow>
      )
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="user-table" >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function retrieveUserFromTable(buttonPressed) {
  const tableCells = buttonPressed.parentElement.parentElement.children;
  let id = tableCells[0].textContent;
  let firstname = tableCells[1].textContent;
  let lastname = tableCells[2].textContent;
  let email = tableCells[3].textContent;
  let age = tableCells[4].textContent;
  let user = { id, firstname, lastname, email, age };
  return user;
}
export default UserTable;