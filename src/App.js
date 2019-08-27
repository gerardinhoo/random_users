import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import "./App.css";

const App = ({ handleChange, clearUsers }) => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setNames(users))
      .then(users => setLoading(false));
  }, []);

  handleChange = e => {
    setSearch(e.target.value);
  };

  clearUsers = e => {
    setNames([]);
    setLoading(false);
  };

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
                    handleChange={handleChange}
                    clearUsers={clearUsers}
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
};

export default App;
