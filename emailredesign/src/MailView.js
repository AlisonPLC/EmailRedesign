import React from "react";

function MailView() {
  return (
    <div className="mailView">
      <div className="mailTitle">
        <span>Email Title</span>
      </div>
      <div className="mailHeader">
        <div className="senderContainer">
          <img src="null" alt="sender Logo" />
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
        <img src="null" alt="markOption" />
        <img src="null" alt="importantOption" />
        <img src="null" alt="replyOption" />
        <img src="null" alt="deliverOption" />
        <img src="null" alt="options" />
      </div>
      <div className="MailBody"></div>
    </div>
  );
}
export default MailView;
