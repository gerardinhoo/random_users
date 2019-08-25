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

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ names: users, loading: false }));
  }

  render() {
    const { search, names } = this.state;
    const filterMonsters = names.filter(name =>
      name.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search
            placeholder="Search Users..."
            handleChange={this.handleChange}
          />
          <Users loading={this.state.loading} names={filterMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
