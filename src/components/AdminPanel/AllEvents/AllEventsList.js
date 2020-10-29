import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles} from "@material-ui/core/styles";

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const AllEventsList = ({ event, handleDeleteEvent}) => {
  const { CurrentDate, name, _id } = event;
  return (
    <StyledTableRow className={_id}>
    <StyledTableCell align="right">{name}</StyledTableCell>
  
    <StyledTableCell align="right">
      <DeleteIcon
        style={{ cursor: "pointer" }}
        onClick={() => handleDeleteEvent(_id)}
      />
    </StyledTableCell>
  </StyledTableRow>
  );
};

export default AllEventsList;