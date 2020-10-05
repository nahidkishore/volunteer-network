import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logo from '../../resource/logos/delete.png' ;
import DeleteIcon from '@material-ui/icons/Delete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const VolunteerRegisterList = () => {
  const classes = useStyles();
  const [registerEvents,setRegisteredEvents]=useState([]);
  /* const {name,description,email,date}=registerEvents; */
  useEffect(()=>{
        
    fetch('http://localhost:7000/allRegisteredEvents')
    .then(res=>res.json())
    .then(data=>setRegisteredEvents(data))

},[])


const handleEventDelete=(id)=>{
  fetch('http://localhost:7000/deleteEvent',{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json',
          id:id
      }
  })
  .then(res=>res.json())
  .then(result=>{
      const existingEvents = registerEvents.filter(data=>data._id !== id)
      if(result){
          setRegisteredEvents(existingEvents)
      }
  })

}
  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
        {/*   <StyledTableCell>ID</StyledTableCell> */}
          <StyledTableCell align="right">Email ID</StyledTableCell>
          <StyledTableCell align="right">Registration Date</StyledTableCell>
          <StyledTableCell align="right">Volunteer List</StyledTableCell>
          <StyledTableCell align="right">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          registerEvents.map(event =>{
            return (
              
                <StyledTableRow>
             
            <StyledTableCell align="right">{event.email}</StyledTableCell>
            <StyledTableCell align="right">{event.CurrentDate}</StyledTableCell>
            <StyledTableCell align="right">{event.name}</StyledTableCell>
            <StyledTableCell align="right"><DeleteIcon style={{cursor:'pointer'}} onClick={handleEventDelete} /> </StyledTableCell>
                </StyledTableRow>
              
            )
          })
        }
        
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default VolunteerRegisterList;