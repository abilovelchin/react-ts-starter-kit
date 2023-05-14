import Navigation from "$components/navigation";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Modals } from "@generouted/react-router";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Navigation */}
      <Navigation />

      {/* Component */}
      <Outlet />

      <ToastContainer
        autoClose={1500}
        position="bottom-center"
        className="text-sm"
      />
      <Modals />
    </div>
  );
};

export default App;
