import Navigation from "@/components/navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex-1">
      {/* Navigation */}
      <Navigation />

      <Outlet />
    </div>
  );
};

export default Layout;
