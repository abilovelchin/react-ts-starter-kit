import Navigation from "$components/navigation";

type Props = {
  children: JSX.Element;
};

const App = ({ children: component }: Props) => {
  return (
    <div className="h-full container mx-auto">
      {/* Navigation */}
      <Navigation />

      {/* Component */}
      {component}
    </div>
  );
};

export default App;
