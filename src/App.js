import axios from "axios";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Comments from "./Components/Posts/Comments";
import Navbar from "./Components/Layouts/Navbar";
import Posts from "./Components/Posts/Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { postId: [], posts: [], comments: [], loading: false };
  }
  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      let response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy=%22$key%22"
      );
      let postId = response.data;

      let posts = [];
      for (let i = 0; i < postId.length; i++) {
        const element = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${postId[i]}.json?print=pretty`
        );

        posts.push(element.data);
      }
      this.setState({ loading: false, postId, posts });
    } catch (error) {
      console.error("Error on api call post", error);
      this.setState({ loading: false });
    }
  };

  getComments = async (postId) => {
    try {
      let count = 0;
      this.setState({ loading: true, comments: [] });
      let { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`
      );
      let commentId = data.kids;

      let comments = [];

      for (let i = 0; i < commentId.length; i++) {
        if (i >= 20) {
          break;
        }
        const { data } = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${commentId[i]}.json?print=pretty`
        );
        comments.push(data);
        count++;

        if (count >= 20) {
          break;
        }
      }

      this.setState({ comments, loading: false });
    } catch (error) {
      console.error("erroro on api call comments", error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div>
        <div className="w-10/12 mx-auto">
          <Navbar />
          <Switch>
            <Route exact path="/hackerNews">
              <Posts
                postsArray={this.state.posts}
                loading={this.state.loading}
              />
            </Route>
            <Route
              exact
              path="/hackerNews/post/:postId"
              render={(props) => (
                <Comments
                  getComments={this.getComments}
                  loading={this.state.loading}
                  comments={this.state.comments}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
