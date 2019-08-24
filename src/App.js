import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://randomuser.me/api/?results=10");

    this.setState({ names: res.data.results, loading: false });

    console.log(res.data.results);

    // return fetch("https://randomuser.me/api/?results=30")
    //   .then(results => {
    //     return results.json();
    //   })
    //   .then(data => {
    //     let names = data.results.map(name => {
    //       return (
    //         <div key={name.results} className="profile">
    //           <h4 className="name">{name.name.first.toUpperCase()}</h4>
    //           <br />
    //           <img src={name.picture.large} alt="pic" />
    //         </div>
    //       );
    //     });
    //     this.setState({ names: names });
    //     console.log(names);
    //   });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} names={this.state.names} />
        </div>
      </div>
    );
  }
}

export default App;
