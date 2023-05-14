import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { PermissionName, permissions } from "./permissions";

export const usePermissions = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const hasPermission = (permissionName: PermissionName) => {
    return user ? permissions[permissionName].includes(user.role) : false;
  };

  return { hasPermission };
};
