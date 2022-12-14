import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./AgGridStyles.scss";
import { ColumnDefs, DefaultColumnDefs, RowData } from "./AgGridTableProps";

export const AgGridTable = () => {
  const gridRef = useRef();
  const [selectedRows, setSelectedRows] = useState([]);

  const [rowData] = useState(RowData);
  const [columnDefs] = useState(ColumnDefs);

  const onRowSelected = (event) => {
    const selected = [];
    // store ids of selected rows
    const nodes = event.api.getSelectedNodes();
    nodes.forEach((node) => {
      selected.push(node.data.id);
    });
    // console.log("selectedRows", selectedRows);
    setSelectedRows([...selectedRows, ...selected]);
  };

  const onFirstDataRendered = () => {
    console.log("selectedRows", selectedRows);

    // show previously selected rows
    gridRef.current.api.forEachNode((node) =>
      node.setSelected(selectedRows.includes(node.data.id))
    );
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={DefaultColumnDefs} // apply common settings to all columns
        animateRows={true} // animation when columns are filtered or sorted
        onRowSelected={onRowSelected}
        // rowSelection="multiple"
        onFirstDataRendered={onFirstDataRendered}
        suppressRowTransform={true}
      ></AgGridReact>
    </div>
  );
};
