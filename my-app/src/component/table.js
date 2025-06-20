import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useState} from 'react' ;
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function DataTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        var heightestId=0
        var ids=[];
        for (let i=0;i<userData.length;i++){
          const currentId=userData[i].id;
          ids.push(currentId)
          if(currentId>heightestId){
            heightestId=currentId
          }
        }
        let newId=1
        for (;newId<=heightestId;newId++){
          if(!ids.includes(newId)){
            break
          }
        }
      
        setUserData([...userData,{id:newId, firstName:firstName, lastName:lastName, age:age}])
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
            <td>Delete</td>
            <td>Update</td>
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
                <td>
                  <button onClick={()=>{
                    if(window.confirm('are you sure you want to delete this user?')){
                      console.log('the user wants to delete the row')
                      console.log('user.id',user.id)
                      const newUserdata = userData.filter((item)=>{
                        return item.id !== user.id;
                      })
                      console.log(newUserdata)
                      setUserData(newUserdata)
                    }
                    else{
                      console.log('the user dont want to delete the row')
                    }
                  }}>Delete</button>
                </td>
                <td><button onClick={()=>{
                  setFirstName(user.firstName);
                  setLastName(user.lastName);
                  setAge(user.age);
                  handleOpen();
                }}>Update</button></td>
              </tr>
          )})}
        </tbody>
        </table>
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <input value={firstName} onChange={(event)=>{
                }} type='text' placeholder='enter your first name'></input>
                <input value={lastName} onChange={(event)=>{
                }} type='text' placeholder='enter your last name'></input>
                <input value={age} onChange={(event)=>{
                }} type='number' placeholder='enter your age'></input>
                <input type='submit'></input>
              </form>
            </Box>
          </Modal>
        </div>
        </Paper>

)}
