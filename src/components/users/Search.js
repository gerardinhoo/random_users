import React, { Component } from "react";

class Search extends Component {
  state = {
    searchField: ""
  };

  onChange = e => this.setState({ searchField: e.target.value });

  render() {
    return (
      <div>
        <div>
          <input
            type="search"
            placeholder="Search Users..."
            onChange={this.onChange}
          />
          {/* <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          /> */}
        </div>
      </div>
    );
  }
}

export default Search;
