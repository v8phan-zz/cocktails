import "./MobileDropdown.css";
import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const MobileDropdown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="!#">Action</Dropdown.Item>
      <Dropdown.Item href="!#">Another action</Dropdown.Item>
      <Dropdown.Item href="!#">Something else</Dropdown.Item>
    </DropdownButton>
  );
};

export default MobileDropdown;
