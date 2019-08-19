import React, { Component } from "react";
import Spinner from "../layout/Spinner";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    } else {
      return fetch("https://randomuser.me/api/?results=30")
        .then(results => {
          return results.json();
        })
        .then(data => {
          let names = data.results.map(name => {
            return (
              <div key={name.results} className="profile">
                <h4 className="name">{name.name.first.toUpperCase()}</h4>
                <br />
                <img src={name.picture.large} alt="pic" />
              </div>
            );
          });
          this.setState({ names: names });
          console.log(names);
        });
    }
  }

  render() {
    return (
      <div>
        <h2 className="user">Profile Users</h2>
        <h4 className="list">A list of random profile users</h4>
        {this.state.names}
      </div>
    );
  }
}

export default Users;
