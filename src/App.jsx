import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import FloorPlan from "./components/FloorPlan";
import Statistics from "./components/Statistics";
import Footer from './components/Footer';
import "./App.css";

function App() {
  const [tables, setTables] = useState([
    { id: 1, name: "T-01", x: 50, y: 50 },
    { id: 2, name: "T-02", x: 150, y: 150 },
  ]);

  // Update table positions when dropped
  const handleDrop = (item, offset) => {
    const updatedTables = tables.map((table) => {
      if (table.id === item.id) {
        return {
          ...table,
          x: offset.x - 50, // Adjust offset to center table
          y: offset.y - 50,
        };
      }
      return table;
    });
    setTables(updatedTables);
  };

  return (
    <div className="app">
      <Sidebar />
      <main>
        <h1>Floor Management</h1>
        <FloorPlan tables={tables} onDrop={handleDrop} />
        <Statistics />
      </main>
    </div>
  );
}

export default App;
