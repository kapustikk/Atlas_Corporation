import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function PositionedSnackbar() {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horisontal: 'central',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      />
    </div>
  );
}
