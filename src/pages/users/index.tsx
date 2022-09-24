import React from "react";
import { useGetUserQuery } from "$services/user.service";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, isLoading, isSuccess, isError } = useGetUserQuery();

  const renderUserList = () => {
    return data?.map((item, i) => (
      <li key={i} className="flex items-center gap-5">
        <span>{item.name}</span>
        <Link to={`/users/${item.id}`} className="text-blue-500 text-sm">
          Show
        </Link>
      </li>
    ));
  };

  return (
    <div className="p-5">
      <ul>{renderUserList()}</ul>
    </div>
  );
};

export default Users;
