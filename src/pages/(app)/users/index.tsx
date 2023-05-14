import { useGetUserQuery } from "@/services/user.service";
import { Link } from "react-router-dom";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid";
import { usePermissions } from "@/rbac";

const Users = () => {
  const { hasPermission } = usePermissions();

  const { data = [], isLoading, isError, error } = useGetUserQuery();

  const renderUserList = () => {
    if (isLoading) {
      return <li className="text-sm animate-bounce">Loading...</li>;
    }

    if (data?.length == 0) {
      return <li className="text-sm text-gray-500">Data not found...</li>;
    }

    return data?.map((item, i) => (
      <li key={i} className="flex items-center gap-x-3">
        <span className="w-40 truncate">{item.name}</span>
        <Link to={`/users/${item.id}`} className="text-blue-500 text-sm">
          <EyeIcon className="w-4 h-4" />
          Show
        </Link>
        {hasPermission("user.delete") && (
          <button
            type="button"
            className="text-blue-500 text-sm flex items-center gap-x-1"
          >
            <TrashIcon className="w-4 h-4" />
            Delete
          </button>
        )}
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
