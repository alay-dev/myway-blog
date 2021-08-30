import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { JumpCircleLoading } from 'react-loadingg';
const Loader = (props) => {
  const { loader } = props;
  return (
    <Dialog open={loader.all_loader} aria-labelledby="Loading...">
      <DialogTitle id="simple-dialog-title">
        {/* <center> */}
        <CircularProgress />
        {/* </center> */}
      </DialogTitle>
    </Dialog>
  );
};

export default Loader;
