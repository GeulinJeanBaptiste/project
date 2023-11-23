import React from "react";
import "./ListMenu.css";

const ListMenu = (props) => {
  return (
    <ul className="ListMenu">
      {props.sendEntries.map((value, index) => {
        return (
          <li //Un event ne peut pas être directement conditionné
            onClick={
              value.entry === "Article" ? props.handleDisplayArticle : null
            }
            key={index}
          >
            {value.entry}
          </li>
        );
      })}
    </ul>
  );
};

export default ListMenu;
