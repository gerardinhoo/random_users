import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ names, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {names.map(name => (
          <UserItem key={name.id} className="name" name={name} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

Users.propTypes = {
  names: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
