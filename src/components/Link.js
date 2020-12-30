import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    e.preventDefault();

    // Change the URL whenever the user click on a link from the navigation BUT DO NOT REFRESH THE PAGE
    window.history.pushState({}, "", href);

    // To tell the Route component that the URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} hred={href}>
      {children}
    </a>
  );
};

export default Link;
