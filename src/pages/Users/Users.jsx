import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersWrapper from './UsersWrapper';
import { getUsers } from '../../datas/api';
import { setUsers } from '../../Redux/action';
import UsersComponent from '../../Components/UsersComponents/UsersComponent';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LinearProgress } from '@material-ui/core';
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
const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    setUsers(dispatch);
  }, []);
  const data = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  return (
    <UsersWrapper>
      <h1>Users</h1>
      {(loading && <LinearProgress />) || ''}
      {(error && (
        <div className="bd-danger d-flex justify-content-center align-items-center w-100">
          <h3 className="text-white">Danger</h3>
        </div>
      )) ||
        ''}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className="row">
              <StyledTableCell className="col-2">id</StyledTableCell>
              <StyledTableCell className="col-2">Name</StyledTableCell>
              <StyledTableCell className="col-2">UserName</StyledTableCell>
              <StyledTableCell className="col-2">Email</StyledTableCell>
              <StyledTableCell className="col-2">Phone</StyledTableCell>
              <StyledTableCell className="col-2">Website</StyledTableCell>
            </TableRow>
          </TableHead>
          {data.map((v, i) => {
            return <UsersComponent key={v.id} data={v} />;
          })}
        </Table>
      </TableContainer>
    </UsersWrapper>
  );
};

export default Users;
