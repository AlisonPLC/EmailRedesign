import React from "react";
import Navbar from "./Navbar";
import Toolbar from "./ToolBar";
import Inbox from "./Inbox";
import MailView from "./MailView";
import "./Styles/Main.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <Inbox />
      <MailView />
    </div>
  );
}

export default App;
