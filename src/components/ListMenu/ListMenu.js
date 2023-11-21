import React from "react";
import "./ListMenu.css";

const ListMenu = (props) => {
  return (
    <ul className="ListMenu">
      {props.sendEntries.map((value, index) => {
        return (
          <a href={value.url} key={index}>
            <li>{value.entry}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default ListMenu;
