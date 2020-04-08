import React from "react";
import defaultImage from "./Assets/default.png";

function Inbox() {
  return (
    <div className="Inbox">
      <div className="inboxTags">
        <span>Primary</span>
        <span>Social</span>
        <span>Promotion</span>
        <span>Update</span>
      </div>
      <div className="inboxActions">
        <input type="checkbox"></input>
        <img src={defaultImage} alt="reload" />
        <img src={defaultImage} alt="oprions" />
      </div>
      <div className="inboxInboxArea">
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
      </div>
    </div>
  );
}

function MailItem() {
  return (
    <div className="mailItem">
      <div className="mailMain">
        <div>
          <h3>MailSENDER</h3>
          <h3>MailSUBJECT</h3>
          <h3>MailSTART</h3>
        </div>
        <h4>Send When?</h4>
      </div>
      {/*can be "copied as shin shin said" */}
    </div>
  );
}
export default Inbox;
