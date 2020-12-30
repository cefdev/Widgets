import { useEffect } from "react";

const Route = ({ path, children }) => {
  // Detect that the URL has changed
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location Changed");
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onlanguagechange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
