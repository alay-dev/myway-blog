import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  CardActionArea,
  Divider,
} from "@material-ui/core";
// import Snackbar from "../components/Snackbar";
import Loader from "../containers/loader/loaderCont";

import moment from "moment";
import "../css/home.css";

export default class Home extends Component {
  componentDidMount() {
    this.props.get_all_posts();
  }
  render() {
    const { post } = this.props;
    return (
      <div className="home">
        <h1>MyWay Blogs</h1>
        <div className="pagination__cont">
          <Pagination count={4} shape="rounded" />
        </div>
        <div className="grid">
          {post.all_post.map((row) => {
            return (
              <Card className="card" variant="outlined">
                <CardActionArea>
                  <CardMedia style={{ height: "14rem" }} image={row.url} />
                  <CardContent>
                    <h3>{row.heading}</h3>
                    <span>Published - {moment(row.date).format("LL")}</span>
                    <p
                      style={{
                        height: "6rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "4",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {row.mainText}
                    </p>
                  </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions>
                  <div className="card__action">
                    <p>{moment(row.date).startOf("hour").fromNow()}</p>
                    <Link
                      to={`/post/${row._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button color="primary" size="small">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            );
          })}
        </div>
        <div style={{ marginTop: "2rem " }} className="pagination__cont">
          <Pagination count={4} shape="rounded" />
        </div>
        <Loader {...this.props} />
        {/* <Snackbar {...this.props} /> */}
      </div>
    );
  }
}
