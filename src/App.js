import "./App.css";
import Article from "./components/Article/Article";
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
        <Article></Article>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
