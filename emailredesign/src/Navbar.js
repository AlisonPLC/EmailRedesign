import React from "react";
import mailLogo from "./Assets/gmail-logo-1.png";
import defaultImage from "./Assets/default.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarHeader">
        <img className="navbarLogo" src={mailLogo} alt="Logo" />
        <span>Gmail</span>
        <img className="navbarSlider" src={defaultImage} alt="NavButton" />
      </div>
      <div className="composeButton">
        <span>+ Compose</span>
      </div>
      <div className="emailTags">
        <TagsTopic />
        <TagsTopic />
        <TagsTopic />
        <TagsTopic />
        {/*can be "copied" as shin said*/}
      </div>
      <div className="chatArea">
        <div className="chatHeader">
          <span>Chat</span>
          <img src={defaultImage} alt="minimize" />
          <img src={defaultImage} alt="expand" />
        </div>
        <div className="recentChats">
          <ChatPerson />
          <ChatPerson />
          <ChatPerson />
          <ChatPerson />
          <ChatPerson />
          {/*can be "copied" as shin said*/}
        </div>
      </div>
    </div>
  );
}
function TagsTopic() {
  return (
    <div className="tagsTopic">
      <img src={defaultImage} alt="logo" />
      <span>Inbox</span>

      <img src={defaultImage} alt="notification" />
    </div>
  );
}
function ChatPerson() {
  return (
    <div className="chatPerson">
      <img src={defaultImage} alt="targuetLogo" />
      <span className="targuetName">NomeDoIndivíduo</span>
    </div>
  );
}

export default Navbar;
