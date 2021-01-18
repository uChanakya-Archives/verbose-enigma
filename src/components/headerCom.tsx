import React from "react";
import "../styles/headerCom.css";

class HeaderCom extends React.Component {
  render() {
    return (
      <header>
        <div className="header_headingDiv">
          <h1>Verbose Enigma</h1>
        </div>
        <div className="header_optDiv">
          <p>what am I doing?</p>
        </div>
      </header>
    );
  }
}
export default HeaderCom;
