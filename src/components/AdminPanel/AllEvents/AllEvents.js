import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Sidebar from '../Sidebar/Sidebar';
import AllEventsList from './AllEventsList';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);



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
const AllEvents = () => {
  const classes = useStyles();

  const [AllEvents,setAllEvents]=useState([]);


  useEffect(()=>{
        
    fetch('https://radiant-harbor-03462.herokuapp.com/datas')
    .then(res=>res.json())
    .then(data=>setAllEvents(data))

},[])


const handleDeleteEvent = (id) => {
  fetch(`https://radiant-harbor-03462.herokuapp.com/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        const newEvents =AllEvents.filter(
          (vEvent) => vEvent._id !== id
        );
        setAllEvents(newEvents);
        console.log(result);
      }
    });
};

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8">
          <h2 className="text-brand text-center my-5">All Events List </h2>
          <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
        {/*   <StyledTableCell>ID</StyledTableCell> */}
          <StyledTableCell align="right">Event Title</StyledTableCell>

          <StyledTableCell align="right">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          AllEvents.map(event =><AllEventsList event={event}
            key={event._id}
            handleDeleteEvent={handleDeleteEvent}></AllEventsList>)
        }
        
      </TableBody>
    </Table>
  </TableContainer>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AllEvents;