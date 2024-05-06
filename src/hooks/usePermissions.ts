import type { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { PermissionName, permissions } from '../constants/permissions';

export default function usePermissions() {
  const { user } = useSelector((state: RootState) => state.auth);

  const hasPermission = (permissionName: PermissionName) => {
    return user?.role ? permissions[permissionName].includes(user.role) : false;
  };

  return { hasPermission };
}
