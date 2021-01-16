import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const handleChange = () => { }

const PriceInput = () => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="price-input">金額</InputLabel>
      <Input
        id="price-input"
        value={0}
        onChange={handleChange}
        endAdornment={<InputAdornment position="end">G</InputAdornment>}
        inputProps={{
          style: {
            textAlign: 'right',
          }
        }}
      />
    </FormControl>
  );
}

export default PriceInput;
