import React, { Component } from "react";
import {
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContentText,
  DialogContent,
} from "@material-ui/core";

export default class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_dialog: false,
      post_edit_dialog: false,
      post_delete_dialog: false,
      selecte_post: "",
    };
  }
  componentDidMount() {
    this.props.get_all_posts(this.state.login);
  }
  render() {
    const {
      post,
      login,
      add_post,
      reset_post,
      set_post_heading,
      set_post_img,
      set_post_main_text,
      update_post,
      set_post_old_img,
      delete_post,
    } = this.props;
    return (
      <div className="dashboard__section">
        <h2>Manage Posts</h2>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.setState({ post_dialog: true })}
          >
            Add new post
          </Button>
        </div>
        <br />

        <TableContainer component={Paper} className="table__cont">
          <Table stickyHeader size="small" aria-label="simple table">
            <TableHead style={{ backgroundColor: "#56cc9d" }}>
              <TableRow>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                >
                  #
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                >
                  Heading
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Author
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Image
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Date
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.all_post.map((row, i) => {
                return (
                  <TableRow>
                    <TableCell
                      style={{
                        color: "#000",
                        fontWeight: "700",
                        fontSize: "1rem",
                      }}
                    >
                      {++i}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.heading ? row.heading : ""}
                    </TableCell>

                    <TableCell align="center">{row.author.name}</TableCell>
                    <TableCell align="center">
                      {row.url ? (
                        <i
                          style={{ cursor: "pointer" }}
                          className="fas fa-link"
                          onClick={() => window.open(row.url)}
                        />
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {row.date ? row.date : ""}
                    </TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => {
                          this.setState({
                            post_delete_dialog: true,
                            selecte_post: row._id,
                          });
                        }}
                      >
                        <i className="fas fa-trash-alt" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {
                          this.setState({
                            post_edit_dialog: true,
                            selecte_post: row._id,
                          });
                          set_post_heading(row.heading);
                          set_post_main_text(row.mainText);
                          set_post_old_img(row.url);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          onClose={() => {
            this.setState({ post_dialog: false });
            reset_post();
          }}
          aria-labelledby="simple-dialog-title"
          open={this.state.post_dialog}
        >
          <DialogContent>
            <DialogContentText>ADD POST</DialogContentText>
            <TextField
              margin="dense"
              type="file"
              fullWidth
              onChange={(e) => set_post_img(e.target.files[0])}
            />
            <TextField
              margin="dense"
              label="Heading"
              type="text"
              fullWidth
              value={post.heading}
              onChange={(e) => set_post_heading(e.target.value)}
            />
            <TextField
              label="Post content"
              multiline
              rows={6}
              margin="dense"
              variant="outlined"
              type="text"
              fullWidth
              value={post.main_text}
              onChange={(e) => set_post_main_text(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              //   style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                this.setState({ post_dialog: false });
                reset_post();
              }}
            >
              {" "}
              cancel
            </Button>
            <Button
              style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                this.setState({ post_dialog: false });
                add_post(post, login);
                reset_post();
              }}
            >
              {" "}
              Post
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          onClose={() => {
            this.setState({ post_edit_dialog: false });
            reset_post();
          }}
          aria-labelledby="simple-dialog-title"
          open={this.state.post_edit_dialog}
        >
          <DialogContent>
            <DialogContentText>EDIT POST</DialogContentText>
            <TextField
              margin="dense"
              type="file"
              fullWidth
              onChange={(e) => set_post_img(e.target.files[0])}
            />
            <TextField
              margin="dense"
              label="Heading"
              type="text"
              fullWidth
              value={post.heading}
              onChange={(e) => set_post_heading(e.target.value)}
            />
            <TextField
              label="Post content"
              multiline
              rows={8}
              margin="dense"
              variant="outlined"
              type="text"
              fullWidth
              value={post.main_text}
              onChange={(e) => set_post_main_text(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              //   style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                this.setState({ post_edit_dialog: false });
                reset_post();
              }}
            >
              {" "}
              cancel
            </Button>
            <Button
              style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                this.setState({ post_edit_dialog: false });
                update_post(this.state.selecte_post, post, login);
                reset_post();
              }}
            >
              {" "}
              Post
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          onClose={() => this.setState({ post_delete_dialog: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.post_delete_dialog}
        >
          <DialogContent>
            <DialogContentText>DELETE POST</DialogContentText>
            <p>Are you sure you want to delete ?</p>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              //   style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                this.setState({ post_delete_dialog: false });
              }}
            >
              {" "}
              cancel
            </Button>
            <Button
              style={{ backgroundColor: "#3c5a5f", color: "#eee" }}
              onClick={() => {
                this.setState({ post_delete_dialog: false });
                delete_post(this.state.selecte_post);
              }}
            >
              {" "}
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
