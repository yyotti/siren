import React from 'react';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ItemType from './ItemType';
import ShowAllSwitch from './ShowAllSwitch';
import { Item, ItemStatus, ItemType as IType } from '../../types';
import { ITEMS } from '../../constants';

export type ListItemType = {
  type: IType,
  name: string,
  status: ItemStatus,
  isDetected: boolean,
}

const createData = (item: Item, status: ItemStatus, isDetected: boolean): ListItemType => {
  return { type: item.type, name: item.name, status, isDetected };
}

// FIXME どっかに移動する
const itemTypeToString = (type: IType) => {
  switch (type) {
    case IType.WEAPON:
      return '武器';
    case IType.SHIELD:
      return '盾';
    case IType.BRACELET:
      return '腕輪';
    case IType.SCROLL:
      return '巻物';
    case IType.GRASS:
      return '草';
    case IType.VASE:
      return '壺';
    case IType.CANE:
      return '杖';
    default:
      return '??';
  }
}

// FIXME どっかに移動する
const itemStatusToString = (s: ItemStatus) =>
  s === ItemStatus.BAD ? '呪' : s === ItemStatus.GOOD ? '祝' : '';

const rows = ITEMS.map((item: Item) => createData(item, ItemStatus.BAD, true));

const ItemList = () => {
  // TODO テーブルじゃなくてアイコン並べるだけでも表現できそう
  return (
    <Grid container>
      <Grid container direction="row">
        <Grid item>
          <ItemType />
        </Grid>
        <Grid item>
          <ShowAllSwitch />
        </Grid>
      </Grid>
      <Grid container direction="row">
        <TableContainer component={Paper}>
          <Table aria-label="Item table">
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
                  <TableCell align="center">{itemTypeToString(row.type)}</TableCell>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="center">{itemStatusToString(row.status)}</TableCell>
                  <TableCell align="center">
                    {row.isDetected ? '済' : ''}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ItemList;
