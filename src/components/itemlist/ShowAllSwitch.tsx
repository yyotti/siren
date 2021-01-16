import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ShowAllSwitch = () => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, checked: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checked}
          onChange={handleChange}
          color="primary"
        />
      }
      label="識別済みは非表示"
    />
  );
}

export default ShowAllSwitch;
