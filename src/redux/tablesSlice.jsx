import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTable: null,
  tables: [
    { id: 1, name: "T-01", minCovers: 1, maxCovers: 4, online: false },
    { id: 2, name: "T-02", minCovers: 2, maxCovers: 6, online: true },
  ],
};

const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    selectTable(state, action) {
      state.selectedTable = state.tables.find((table) => table.id === action.payload);
    },
    updateTable(state, action) {
      const { id, updatedData } = action.payload;
      const table = state.tables.find((table) => table.id === id);
      if (table) {
        Object.assign(table, updatedData);
      }
    },
  },
});

export const { selectTable, updateTable } = tablesSlice.actions;
export default tablesSlice.reducer;
