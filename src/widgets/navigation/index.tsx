import type { AppDispatch, RootState } from '@/store/index';

import { NavLink } from 'react-router-dom';
import { useModals } from '@/router';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '@/store/features/auth.slice';

import './style.css';
import { ArrowRightIcon, HomeIcon, LightbulbIcon, UserIcon } from 'lucide-react';

const Navigation: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const modals = useModals();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className="border-b flex items-center justify-end gap-3 py-2 px-5 text-gray-600">
      <li>
        <NavLink to="/">
          <HomeIcon className="w-4 h-4" /> Home page
        </NavLink>
      </li>

      {auth?.user ? (
        <li>
          <button
            type="button"
            className="flex items-center gap-x-2"
            onClick={handleLogout}
          >
            <ArrowRightIcon className="w-4 h-4" />
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink to="/login">
            <UserIcon size="16" />
            Login
          </NavLink>
        </li>
      )}
      <li>
        <button
          onClick={() => modals.open('/modals/example')}
          className="flex items-center gap-x-1 ml-3"
        >
          <LightbulbIcon size="16" /> Modal
        </button>
      </li>
    </ul>
  );
};

export default Navigation;
