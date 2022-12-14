import React from "react";

const Footer = () => {
  const icons = [
    "fa fa-linkedin",
    "fa fa-envelope",
    "fa fa-github",
    "fa fa-telegram",
  ];
  return (
    <section className="footer">
      <span className="disclaimer">
        Copyright @ All Rights reserved 2022 | Made with Love by Anup
      </span>

      <div className="icons-row">
        <div className="media-btns">
          {icons.map((icon, index) => {
            return (
              <div className="icons" key={index}>
                <i className={icon} aria-hidden="true"></i>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
