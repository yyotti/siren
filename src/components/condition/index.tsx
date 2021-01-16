import React from 'react';
import PriceType from './PriceType';
import PriceInput from './PriceInput';
import ItemType from './ItemType';
import ShowAllSwitch from './ShowAllSwitch';

const Condition = () => {
  return (
    <>
      <PriceType />
      <PriceInput />
      <ItemType />
      <ShowAllSwitch />
    </>
  );
}

export default Condition;
