import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  // State to track if the dropdown is open or close
  const [open, setOpen] = useState(false);

  // We'll assign this Ref to this component first parent ( The one that has a class "ui form")
  const ref = useRef();

  // Run useEffect only once at the begining when the app started.
  // Fucntionality to close the dropdown when we click somewhere else on the body
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      // If the element we clicked on is inside our component
      if (ref.current.contains(event.target)) {
        return;
      }
      // If not, set 'open' to false
      setOpen(false);
    });
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
        <label className="label">Select a Color</label>
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
      <h4 style={{ color: `${selected.value}` }}>
        This text is {selected.value.toUpperCase()} !
      </h4>
    </div>
  );
};

export default Dropdown;
