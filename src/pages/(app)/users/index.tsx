import { Link } from 'react-router-dom';
import { EyeOpenIcon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@/components';

import { usePermissions } from '@/hooks';
import { useGetUserQuery } from '@/services/user.service';

const UsersPage: React.FC = () => {
  const { hasPermission } = usePermissions();

  const { data = [], isLoading } = useGetUserQuery();

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

        <div className="flex items-center gap-x-2">
          <Link to={`/users/${item.id}`} className="p-0">
            <Button variant="outline" size="sm">
              <EyeOpenIcon className="w-4 h-4" />
              Show
            </Button>
          </Link>
          {hasPermission('user.delete') && (
            <Button variant="destructive" size="sm">
              <TrashIcon className="w-4 h-4" />
              Delete
            </Button>
          )}
        </div>
      </li>
    ));
  };

  return (
    <div className="p-5">
      <ul className="flex flex-col gap-y-4">{renderUserList()}</ul>
    </div>
  );
};

export default UsersPage;
