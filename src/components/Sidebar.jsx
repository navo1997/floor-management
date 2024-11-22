import React from "react";
import TableOptions from "./TableOptions";
import TableDetails from "./TableDetails";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Table Options</h3>
      <TableOptions />
      <h3>Table Details</h3>
      <TableDetails />
    </div>
  );
}

export default Sidebar;
