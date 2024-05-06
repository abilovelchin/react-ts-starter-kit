import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-blue-600 h-screen">
      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
