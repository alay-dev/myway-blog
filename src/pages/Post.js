import React, { Component } from "react";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";
import img from "../img/1.jpeg";
import Logo from "../img/logo.png";
import "../css/post.css";

export default class Post extends Component {
  componentDidMount() {
    this.props.get_post_by_id(this.props.match.params.id);
  }
  render() {
    const { login, post, comment, set_comment, add_comment } = this.props;
    return (
      <div className="post">
        <h1>MyWay Blogs</h1>
        <div className="goback__cont">
          <Link to="/">
            <p>Go Back</p>
          </Link>
        </div>
        <div className="post__grid">
          <h1>{post.current_post.heading}</h1>
          <img
            src={post.current_post.url}
            alt="post img"
            className="post__img"
          />
          <div className="post__caption">
            <div className="logo__cont">
              <img src={Logo} alt="logo" />
              <p>MyWays</p>
              <span style={{ color: "grey" }}>
                {moment(post.current_post.date).format("LL")}
              </span>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
            <Button size="small" variant="contained" color="primary">
              Share
            </Button>
          </div>
          <p className="post__main">{post.current_post.mainText}</p>
          <div className="tags__cont">
            <p>Web development</p>
            <p>Career in coding</p>
            <p>Web D</p>
            <p>Front-end</p>
          </div>
          <div className="like__comment">
            <div className="like__comment--sec">
              <i className="far fa-thumbs-up" />
              <span>6 likes</span>
            </div>
            <div className="like__comment--sec">
              <i class="far fa-comments" />
              <span>{post.current_post.comments.length} comments</span>
            </div>
          </div>
          <h3 style={{ color: "#222" }}>Comments</h3>
          <Divider />
          <List>
            {post.current_post.comments.map((row) => {
              return (
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={row.user.name} src={row.user.url} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <span>{row.user.name}</span>
                        <small style={{ color: "grey", marginLeft: "1rem" }}>
                          {moment(row.date).format("LL")}
                        </small>
                      </React.Fragment>
                    }
                    secondary={<span>{row.comment}</span>}
                  />
                </ListItem>
              );
            })}
          </List>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={comment.comment}
            onChange={(e) => set_comment(e.target.value)}
          />
          <Button
            style={{
              backgroundColor: "#3c5a5f",
              color: "#eee",
              marginTop: "2rem",
            }}
            onClick={() =>
              add_comment(this.props.match.params.id, comment, login)
            }
          >
            Add Comment
          </Button>
        </div>
      </div>
    );
  }
}
