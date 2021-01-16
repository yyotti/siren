import React from 'react';
import { Grid } from '@material-ui/core';
import PriceType from './PriceType';
import PriceInput from './PriceInput';

const Condition = () => {
  return (
    <Grid container>
      <Grid item>
        <PriceType />
      </Grid>
      <Grid item>
        <PriceInput />
      </Grid>
    </Grid>
  );
}

export default Condition;
