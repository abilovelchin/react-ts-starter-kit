import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components';

const App: React.FC = () => {
  return (
    <Fragment>
      {/* Route Outlet/Content */}
      <Outlet />

      {/* Modules */}
      <Toaster />
    </Fragment>
  );
};

export default App;
