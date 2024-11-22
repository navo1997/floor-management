import React from "react";
import { useDrop } from "react-dnd";
import DraggableTable from "./DraggableTable";
import "../styles/FloorPlan.css";

function FloorPlan({ tables, onDrop }) {
  // Define drop functionality
  const [, drop] = useDrop(() => ({
    accept: "TABLE",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      onDrop(item, offset);
    },
  }));

  return (
    <div className="floor-plan" ref={drop}>
      {tables.map((table) => (
        <DraggableTable key={table.id} table={table} />
      ))}
    </div>
  );
}

export default FloorPlan;
