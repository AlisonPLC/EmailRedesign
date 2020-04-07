import React from "react";
import mailLogo from "./Assets/gmail-logo-1.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarHeader">
        <img className="navbarLogo" src={mailLogo} alt="Logo" />
        <span>Gmail</span>
        <img classnName="navbarSlider" src="null" alt="NavButton" />
      </div>
      <div className="composeButton">
        <span>+ Compose</span>
      </div>
      <div className="emailTags">
        <div className="tagsTopic">
          <img src="null" alt="logo" />
          <span>Inbox</span>

          <img src="null" alt="notification" />
        </div>
        {/*can be "copied" as shin said*/}
      </div>
      <div className="chatArea">
        <div className="chatHeader">
          <span>Chat</span>
          <img src="null" alt="minimize" />
          <img src="null" alt="expand" />
        </div>
        <div className="recentChats">
          <div className="chatPerson">
            <img src="null" alt="targuetLogo" />
            <span className="targuetName">NomeDoIndivíduo</span>
          </div>
          {/*can be "copied" as shin said*/}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
