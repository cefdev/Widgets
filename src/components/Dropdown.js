import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  // State to track if the dropdown is open or close
  const [open, setOpen] = useState(false);

  // Assign this Ref to this component first element (The one that has a class "ui form")
  const ref = useRef();

  // Run useEffect only once at the begining when the app started.
  // Fucntionality to close the dropdown when we click somewhere else on the body
  useEffect(() => {
    const onBodyClick = (event) => {
      // If the element we clicked on is inside our component, do nothing
      if (ref.current.contains(event.target)) {
        return;
      }
      // If not, set 'open' to false
      setOpen(false);
    };

    // Event listeners added using addeventListener are called first. After that events added using React are called
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // Hide the selected color from the dropdown options
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
