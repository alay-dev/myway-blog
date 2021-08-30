import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const SnackBar = (props) => {
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.set_snackbar_status(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const { snackbar } = props;
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar.status}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <this.Alert severity={snackbar.severity} onClose={handleClose}>
          {snackbar.message}
        </this.Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
