import { useGetUserQuery } from "$services/user.service";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";

const Users = () => {
  const { data = [], isLoading, isError, error } = useGetUserQuery();

  const renderUserList = () => {
    if (isLoading) {
      return <li className="text-sm animate-bounce">Loading...</li>;
    }

    if (data?.length == 0) {
      return <li className="text-sm text-gray-500">Data not found...</li>;
    }

    return data?.map((item, i) => (
      <li key={i} className="flex items-center gap-x-5">
        <span className="w-40 truncate">{item.name}</span>
        <Link to={`/users/${item.id}`} className="text-blue-500 text-sm">
          <EyeIcon className="w-4 h-4" />
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

export const role = "USER";
