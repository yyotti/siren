import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const handleChange = () => { }

const ItemType = () => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink id="item-type-select-label">
        アイテム種別
      </InputLabel>
      <Select
        labelId="item-type-select-label"
        value=""
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem value="">全て</MenuItem>
        <MenuItem value={1}>武器</MenuItem>
        <MenuItem value={2}>盾</MenuItem>
        <MenuItem value={3}>腕輪</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ItemType;
