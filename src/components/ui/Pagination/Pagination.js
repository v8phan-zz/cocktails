import React from "react";
import "./Pagination.css";

const Pagination = ({ paginate }) => {
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

  return (
    <nav class="text-center">
      <ul className="pagination">
        {alphabet.map((letter) => (
          <li key={letter} className="page-item">
            <a onClick={() => paginate(letter)} href="#nogo" className="page-link">
              {letter}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
