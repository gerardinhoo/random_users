import React from "react";

const UserItem = ({ name: { name } }) => {
  return (
    <div className="card text-center">
      <div className="user_item">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default UserItem;
