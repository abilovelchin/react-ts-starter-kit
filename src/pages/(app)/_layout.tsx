import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '@/widgets/navigation';

const Layout: React.FC = () => {
  return (
    <Fragment>
      <Navigation />

      <Outlet />
    </Fragment>
  );
};

export default Layout;
