import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useState} from 'react' ;

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [userData, setUserData] = useState(
    [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]);
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [age, setAge]=useState(0);
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      {/* <DataGrid }
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      // {/* /> */}
      <form onSubmit={(event)=>{
        event.preventDefault();
        setUserData([...userData,{id:10, firstName:firstName, lastName:lastName, age:age}])
      }}>
        <input onChange={(event)=>{
          setFirstName(event.target.value);
        }} type='text' placeholder='enter your first name'></input>
        <input onChange={(event)=>{
          setLastName(event.target.value)
        }} type='text' placeholder='enter your last name'></input>
        <input onChange={(event)=>{
          setAge(event.target.value)
        }} type='number' placeholder='enter your age'></input>
        <input type='submit'></input>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user,index)=>{
            return(
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user. lastName}</td>
                <td>{user.age}</td>
              </tr>

            )
          })}
        </tbody>
      </table>
    </Paper>
  );
}
