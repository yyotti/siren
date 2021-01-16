import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

const handleChange = () => { };

const PriceType = () => {
  const value = "0";

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">値段種別</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="0" control={<Radio />} label="買値" />
        <FormControlLabel value="1" control={<Radio />} label="売値" />
      </RadioGroup>
    </FormControl>
  );
}

export default PriceType;
