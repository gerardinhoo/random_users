import React from "react";

const UserItem = ({ name: { name, email, website } }) => {
  return (
    <div className="card text-center">
      <div className="user_item">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{website}</p>
      </div>
    </div>
  );
};

export default UserItem;
