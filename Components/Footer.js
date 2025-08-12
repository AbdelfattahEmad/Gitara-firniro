import React from "react";
import "../css/Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Links">
          {/* row 1 */}

          <ul>
            <li className="funiro">Funiro</li>
            <li className="Gray_p">
              <p style={{ fontSize: "12px", color: "#9F9F9F" }}>
                400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
                33134 USA
              </p>
            </li>
          </ul>

          {/* row 2 */}

          <ul>
            <li className="Gray" style={{ color: "#9F9F9F" }}>
              Links
            </li>
            <li>Home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
          {/* row 3 */}

          <ul>
            <li className="Gray" style={{ color: "#9F9F9F" }}>
              Help
            </li>
            <li>Payment options</li>
            <li>returns</li>
            <li>Privacy policies</li>
          </ul>

          {/* row 4 */}

          <ul>
            <li className="Gray" style={{ color: "#9F9F9F" }}>
              Newsletter
            </li>
            <li className="subscribe_input">
              <input
                type="email"
                placeholder="Enter your email address"
                className="underline-input"
              />
              <button>Subscribe</button>
            </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>

        {/* Copyright */}
        <hr />
        <div className="copyright">
          <p>2023 furino. All rights reverved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
