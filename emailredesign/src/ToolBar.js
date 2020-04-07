import React from "react";
import defaultImage from "./Assets/default.png";

function Toolbar() {
  return (
    <div className="Toolbar">
      <input></input>
      <img className="openMenu" src={defaultImage} alt="open menu" />
      <img className="userLogo" src={defaultImage} alt="User Logo" />
    </div>
  );
}

export default Toolbar;
