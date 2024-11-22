import React from "react";
import { Button, IconButton } from "@mui/material";
import { ReactComponent as MinCoversIcon } from "../assets/Button.base (1).svg"; // Import as a component
import "../styles/YourStyle.css";  // Assuming you have styles

const MinCoversButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<MinCoversIcon />}
      style={{ width: "200px", display: "flex", alignItems: "center" }}
    >
      Min Covers
    </Button>
  );
};

export default MinCoversButton;
