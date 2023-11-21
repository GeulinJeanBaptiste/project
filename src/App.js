import "./App.css";
import Menu from "./components/Menu/Menu";
import Sliders from "./components/Sliders/Sliders";
import { menuentries } from "./menuentries";

const App = () => {
  return (
    <>
      <header>
        <Menu sendEntries={menuentries}></Menu>
      </header>
      <main>
        <Sliders></Sliders>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
