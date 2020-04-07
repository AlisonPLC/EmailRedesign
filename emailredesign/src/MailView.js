import React from "react";
import defaultImage from "./Assets/default.png";

function MailView() {
  return (
    <div className="mailView">
      <div className="mailTitle">
        <span>Email Title</span>
      </div>
      <div className="mailHeader">
        <div className="senderContainer">
          <img src={defaultImage} alt="sender Logo" />
        </div>
        <div className="senderInfo">
          <span>Sender Name</span>
          <span>send to</span>
        </div>
        <div className="sendeDate">
          <span>Send in ...</span>
        </div>
      </div>
      <div className="mailOptions">
        <div className="firstOptions">
          <img src={defaultImage} alt="markOption" />
          <img src={defaultImage} alt="importantOption" />
        </div>
        <div className="secondOptions">
          <img src={defaultImage} alt="replyOption" />
          <img src={defaultImage} alt="deliverOption" />
          <img src={defaultImage} alt="options" />
        </div>
      </div>
      <div className="MailBody"></div>
    </div>
  );
}
export default MailView;
