import Header from "./Components/Header";
import WithTheme from "./Utils/WithTheme";

const ThemedHeader = WithTheme(Header);

function App() {
  return (
    <>
      <ThemedHeader />
    </>
  );
}

export default App;
