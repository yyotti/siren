import React from 'react';
import { Container } from '@material-ui/core';
import Condition from './condition';
import ItemList from './itemlist';

const Main = () => {
  return (
    <Container maxWidth="md">
      <Condition />
      <ItemList />
    </Container>
  );
}

export { Main };
