import "./MobileDropdown.css";
import React, { useState } from "react";

const MobileDropdown = ({ dropper }) => {

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  return (
    <div className="dropdown" onClick={toggleOpen}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        Browse alphabetically
      </button>
      <ul className={menuClass} aria-labelledby="dropdownMenuButton">
      {alphabet.map((letter) => (
          <li key={letter} className="page-item">
            <a onClick={() => dropper(letter)} href="#nogo" className="page-link">
              {letter}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileDropdown;
