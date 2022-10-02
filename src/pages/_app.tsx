import Navigation from "$components/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: JSX.Element;
};

const App = ({ children: component }: Props) => {
  return (
    <div className="flex flex-col h-full">
      {/* Navigation */}
      <Navigation />

      {/* Component */}
      {component}

      <ToastContainer
        autoClose={1500}
        position="bottom-center"
        className="text-sm"
      />
    </div>
  );
};

export default App;
