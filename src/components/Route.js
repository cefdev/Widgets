import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // To set the current URL to 'currenPath'
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Detect that the URL has changed
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onlanguagechange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
