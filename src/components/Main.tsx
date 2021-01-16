import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Condition from './condition';
import ItemList from './itemlist';

const Main = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item sm={12} md={5}>
          <Condition />
        </Grid>
        <Grid item sm={12} md={7}>
          <ItemList />
        </Grid>
      </Grid>
    </Container>
  );
}

export { Main };
