import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTable } from "../redux/tablesSlice";
import "../styles/TableDetails.css";

function TableDetails() {
  const dispatch = useDispatch();
  const selectedTable = useSelector((state) => state.tables.selectedTable);

  const handleInputChange = (field, value) => {
    if (selectedTable) {
      dispatch(
        updateTable({
          id: selectedTable.id,
          updatedData: { [field]: value },
        })
      );
    }
  };

  if (!selectedTable) {
    return <p>Please select a table</p>;
  }

  return (
    <div className="table-details">
      <input
        type="text"
        placeholder="Table Name"
        value={selectedTable.name || ""}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <div>
        <label>Min Covers</label>
        <input
          type="number"
          value={selectedTable.minCovers || 1}
          onChange={(e) => handleInputChange("minCovers", parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Max Covers</label>
        <input
          type="number"
          value={selectedTable.maxCovers || 4}
          onChange={(e) => handleInputChange("maxCovers", parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Online</label>
        <input
          type="radio"
          checked={selectedTable.online || false}
          onChange={(e) => handleInputChange("online", e.target.checked)}
        />
      </div>
    </div>
  );
}

export default TableDetails;
