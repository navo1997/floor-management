import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { selectTable } from "../redux/tablesSlice";
import "../styles/DraggableTable.css";

function DraggableTable({ table }) {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TABLE",
    item: table,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    dispatch(selectTable(table.id));
  };

  const tableStyle = {
    position: "absolute",
    left: table.x,
    top: table.y,
    opacity: isDragging ? 0.5 : 1,
    cursor: "move",
  };

  return (
    <div ref={drag} className="draggable-table" style={tableStyle} onClick={handleClick}>
      <span>{table.name}</span>
    </div>
  );
}

export default DraggableTable;
