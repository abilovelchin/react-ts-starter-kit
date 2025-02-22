import type { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { PermissionName, permissions } from '../constants/permissions';

export default function usePermissions() {
  const auth = useSelector((state: RootState) => state.auth);
  const user = auth?.data?.user;

  const hasPermission = (permissionName: PermissionName) => {
    return user?.role ? permissions[permissionName].includes(user.role.key) : false;
  };

  return { hasPermission };
}
