import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <Link to="http://dexignzone.com/" target="_blank">
            Ahmad
          </Link>{" "}
          {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
