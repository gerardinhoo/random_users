import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";

import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ names: users, loading: false }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} names={this.state.names} />
        </div>
      </div>
    );
  }
}

export default App;
