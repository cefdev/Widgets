// Any component inside this Route component is considered as children, That's why we used the word 'children' as a parameter

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
