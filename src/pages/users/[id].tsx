import { useParams } from "$src/router";
import React from "react";

const UserItem = () => {
  const { id } = useParams("/users/:id");

  return <div className="p-5">User ID: {id}</div>;
};

export default UserItem;
export const role = "USER";
