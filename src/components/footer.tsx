import React from "react";
import "../styles/footer.css";

class FooterX extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer_whatDiv">
          <h3>What is this?</h3>
          <p>The Answer to that will be answered very soon. Stay Tuned!</p>
        </div>
        <div className="footer_linkDiv">
          <ul className="linksList">
            <li>
              <a href="https://github.com/U-C-S/verbose-enigma">Source Code</a>
            </li>
            <li>
              <a href="https://github.com/U-C-S">U-C-S Github</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default FooterX;
