import React from "react";

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
        <img src="null" alt="reload" />
        <img src="null" alt="oprions" />
      </div>
      <div className="inboxInboxArea">
        <div className="mailItem">
          <div className="mailMain">
            <div>
              <h2>MailSENSER</h2>
              <h3>MailSUBJECT</h3>
              <h4>MailSTART</h4>
            </div>
            <span>SENT</span>
          </div>
          {/*can be "copied as shin shin said" */}
        </div>
      </div>
    </div>
  );
}
export default Inbox;
