import React from "react";

const Link = ({ className, href, children }) => {
  // Change the URL whenever the user click on a link from the navigation BUT DO NOT REFRESH THE PAGE
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
  };

  return (
    <a onClick={onClick} className={className} hred={href}>
      {children}
    </a>
  );
};

export default Link;
