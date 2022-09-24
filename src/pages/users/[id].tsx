import React from "react";
import { useParams } from "react-router-dom";

const UserItem = () => {
  const { id } = useParams();
  return <div className="p-5">User ID: {id}</div>;
};

export default UserItem;
