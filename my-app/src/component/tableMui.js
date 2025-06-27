import * as React from 'react';
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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

export default function DataTable2() {
  // عملت ستيت فيها الصفوف وايضا داخل الفانكشن وضعت الاعمدة
  const [rows,setRows]= useState([
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
    const [idToUpdate, setIdToUpadte]=useState(0);
    const [age, setAge]=useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
  // create 2 fields for update and delete
  {field: 'actions',
    headerName: 'Actions',
    width: 200,
    // The renderCell function is a custom renderer for a specific column in the MUI DataGrid. It lets you define how each cell in that column should be displayed — instead of just showing raw data.
    renderCell: (params)=>(
      <div>
        {/* بدي ابعت الاي دي للازرار بحيث لو ضغطت على ابديت مثلا ويكون معي الاي دي واحد راح يدور بالصفوف على الايدي واحد ويغيره */}
        <button onClick={()=>{
          // alert(params.row.id) 
          // params in renderCell contains information about the specific cell and its row, It gives you full access to the current row and cell only.
          // params.row -> The entire row object (like { id: 1, firstName: 'Jon' , lastName: 'Snow', age: 35})
          // params.id -> The row's ID (e.g. 1)
          // Get the id value from the entire row object that this cell (button or data) belongs to.
          // params.row.id gives you the ID of the user (or row) that you want to delete or update — right at the moment you click the button.
          if(window.confirm('are you sure you want to delete this user?')){
                      console.log('the user wants to delete the row')
                      console.log('user.id',params.row.id)
                      const newUserdata = rows.filter((item)=>{
                        return item.id !== params.row.id;
                      })
                      console.log(newUserdata)
                      setRows(newUserdata)
                    }
                    else{
                      console.log('the user dont want to delete the row')
                    }
        }} style={{marginRight:10}}>Delete</button>
        <button onClick={()=>{
                  setFirstName(params.row.firstName);
                  //params.row.firstName gives you the firstName of the user (or row) that you want to update once you click on Update button
                  setLastName(params.row.lastName);
                  //params.row.lastName gives you the lastName of the user (or row) that you want to update once you click on Update button
                  setAge(params.row.age);
                  //params.row.age gives you the age of the user (or row) that you want to update once you click on Update button
                  setIdToUpadte(params.row.id);
                  //params.row.id gives you the id of the user (or row) that you want to update once you click on Update button
                  handleOpen();
        }} style={{marginRight:10}}>Update</button>
      </div>
    )
  }
];

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <form onSubmit={(event)=>{
        event.preventDefault();
        var heightestId=0
        var ids=[];
        for (let i=0;i<rows.length;i++){
          const currentId=rows[i].id;
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
      
        setRows([...rows,{id:newId, firstName:firstName, lastName:lastName, age:age}])
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
       <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={(e)=>{
                e.preventDefault()
                console.log('you want to delete the user with the id',idToUpdate);
                rows.forEach(
                  (user,index)=>{
                    if(user.id===idToUpdate){
                      console.log('user before update',user);
                      user.firstName=firstName;
                      user.lastName=lastName;
                      user.age=age;
                      console.log('user aftet update',user);
                      const newUserData = [...rows];
                      newUserData[index]=user;
                      setRows(newUserData);
                      handleClose();
                    }
                  }
                )
              }}>
                <input value={firstName} onChange={(event)=>{
                  setFirstName(event.target.value);
                }} type='text' placeholder='enter your first name'></input>
                <input value={lastName} onChange={(event)=>{
                  setLastName(event.target.value)
                }} type='text' placeholder='enter your last name'></input>
                <input value={age} onChange={(event)=>{
                  setAge(event.target.value)
                }} type='number' placeholder='enter your age'></input>
                <input type='submit'></input>
              </form>
            </Box>
          </Modal>
        </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
