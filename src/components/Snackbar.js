import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

class SnackBar extends Component {
  handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.props.set_snackbar_status(false);
  };

  Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  render() {
    const { snackbar } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={snackbar.status}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <this.Alert severity={snackbar.severity} onClose={this.handleClose}>
            {snackbar.message}
          </this.Alert>
        </Snackbar>
      </div>
    );
  }
}

export default SnackBar;
