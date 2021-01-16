import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (type: number, name: string, price: number, status: number, detected: boolean) => {
  return { type, name, price, status, detected };
}


const rows = [
  createData(0, 'ただの棒', 105, 0, false),
  createData(1, 'ただの木の盾', 210, 1, true),
  createData(2, '透視の腕輪', 30000, -2, false),
];

const ItemList = () => {
  const classes = useStyles();

  // TODO テーブルじゃなくてアイコン並べるだけでも表現できそう
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Item table">
        <TableHead>
          <TableRow>
            <TableCell>種別</TableCell>
            <TableCell>アイテム名</TableCell>
            <TableCell>祝/呪</TableCell>
            <TableCell>識別</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}> {/* TODO IDか何かにする */}
              <TableCell align="center">
                {row.type == 0 ? '武器' : row.type == 1 ? '盾' : '腕輪'}
              </TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">
                {row.status < 0 ? '呪' : row.status > 0 ? '祝' : ''}
              </TableCell>
              <TableCell align="center">
                {row.detected ? '済' : ''}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemList;
