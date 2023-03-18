import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Toast = ({ open, onClose, severity, message }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      >
        <MuiAlert elevation={6} variant="filled" severity={severity} >
          {message}
        </MuiAlert>
    </Snackbar>
  )
}

export default Toast