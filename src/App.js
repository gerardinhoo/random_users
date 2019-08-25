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
      loading: false,
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ names: users, loading: false }));
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  clearUsers = e => {
    this.setState({ names: [], loading: false });
  };

  render() {
    const { search, names, loading } = this.state;
    const filterMonsters = names.filter(name =>
      name.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        <Navbar />
        <img
          src="https://www.sccpre.cat/mypng/detail/2-21859_cartoon-group-of-people-png-png-download-college.png"
          alt=""
          style={{ width: "400px", marginLeft: "70%" }}
        />
        <div className="container">
          <Search
            placeholder="Search Users..."
            handleChange={this.handleChange}
            clearUsers={this.clearUsers}
            showClear={names.length > 0 ? true : false}
          />
          <Users loading={loading} names={filterMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
