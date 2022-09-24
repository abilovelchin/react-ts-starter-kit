type Props = {
  children: JSX.Element;
};

const App = ({ children: component }: Props) => {
  return <div className="h-full">{component}</div>;
};

export default App;
