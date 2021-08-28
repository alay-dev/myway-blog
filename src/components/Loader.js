import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { JumpCircleLoading } from 'react-loadingg';
export default class Loader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <Dialog open={loader.all_loader} aria-labelledby="Loading...">
        <DialogTitle id="simple-dialog-title">
          {/* <center> */}
          <CircularProgress />
          {/* </center> */}
        </DialogTitle>
      </Dialog>
    );
  }
}
