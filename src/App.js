import React from "react";
import "./App.css";
import Article from "./components/Article/Article";
import Menu from "./components/Menu/Menu";
import Sliders from "./components/Sliders/Sliders";
import { menuentries } from "./menuentries";

const App = () => {
  const [state, setState] = React.useState({ displayArticle: false });

  const handleDisplayArticle = () => {
    setState({ displayArticle: !state.displayArticle });
    // state.displayArticle = !state.displayArticle; Ceci est interdit !!!!!!
  };

  return (
    <>
      <header>
        <Menu
          sendEntries={menuentries}
          handleDisplayArticle={handleDisplayArticle}
        ></Menu>
      </header>
      <main>
        <Sliders></Sliders>
        {state.displayArticle ? <Article></Article> : <></>}
      </main>
      <footer></footer>
    </>
  );
};

export default App;
