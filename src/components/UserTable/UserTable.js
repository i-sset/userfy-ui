import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './UserTable.css';

let UserTable = ({data}) => {

  function renderRows() {
    return data.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{item.ID}</TableCell>
          <TableCell>{item.Name}</TableCell>
          <TableCell>{item.Email}</TableCell>
          <TableCell>{item.Age}</TableCell>
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
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default UserTable;