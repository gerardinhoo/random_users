import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import About from "./components/pages/About";
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
      <Router>
        <div>
          <Navbar />

          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      placeholder="Search Users..."
                      handleChange={this.handleChange}
                      clearUsers={this.clearUsers}
                      showClear={names.length > 0 ? true : false}
                    />
                    <Users loading={loading} names={filterMonsters} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
