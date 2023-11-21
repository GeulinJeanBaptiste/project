import ListMenu from "../ListMenu/ListMenu";
import "./Menu.css";
const Menu = (props) => {
  return (
    <nav id="nav">
      Hello world<ListMenu sendEntries={props.sendEntries}></ListMenu>
    </nav>
  );
};
export default Menu;
