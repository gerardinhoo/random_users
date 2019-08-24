import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.names.map(name => (
          <UserItem key={name.id} className="name" name={name} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;

// import React, { Component } from "react";

// class Users extends Component {
//   constructor() {
//     super();
//     this.state = {
//       names: [],
//       loading: false
//     };
//   }

//   componentDidMount() {
//     return fetch("https://randomuser.me/api/?results=30")
//       .then(results => {
//         return results.json();
//       })
//       .then(data => {
//         let names = data.results.map(name => {
//           return (
//             <div key={name.results} className="profile">
//               <h4 className="name">{name.name.first.toUpperCase()}</h4>
//               <br />
//               <img src={name.picture.large} alt="pic" />
//             </div>
//           );
//         });
//         this.setState({ names: names });
//         console.log(names);
//       });
//   }

//   render() {
//     return <div>{this.state.names}</div>;
//   }
// }

// export default Users;
