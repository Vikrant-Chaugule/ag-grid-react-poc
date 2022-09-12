import React from "react";

const AddSupplier = (params) => {
  console.log("params", params);
  return (
    <div>
      <div>{params.value}</div>
      <div
        style={{ color: "green" }}
        onClick={() => console.log("Add supplier")}
      >
        +Add Supplier{" "}
      </div>
    </div>
  );
};

export const DefaultColumnDefs = {
  sortable: true,
  filter: "agTextColumnFilter" // customizable Filter
};

export const ColumnDefs = [
  {
    field: "skuNumber",
    pinned: "left",
    checkboxSelection: true,
    headerCheckboxSelection: true,
    rowSpan: (params) => 2
    // cellRenderer: ShowCellRenderer,
  },
  {
    field: "skuDescription",
    editable: true,
    rowSpan: (params) => 2
  },
  {
    field: "channel",
    rowSpan: (params) => 2
  },
  { field: "supplier", rowSpan: (params) => 1, cellRenderer: AddSupplier },
  { field: "category", rowSpan: (params) => 1 }
];

export const RowData = [
  {
    id: "d4d86a02-fa9f-444e-bb4d-e83a429c5edf",
    skuNumber: 1000001,
    skuDescription: "Javara Veggie Noodle Basil and Garlic 200 gram",
    channel: "B2B",
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  },
  {
    id: "a151edc7-c73e-468b-bef8-a26c43229a07",
    skuNumber: 1000002,
    skuDescription: "Javara Veggie Noodle Broccoli 200 gram",
    channel: "B2C",
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  },
  {
    id: "a151edc7-c73e-468b-bef8-a26c43229a08",
    skuNumber: 1000003,
    skuDescription: "Javara Veggie Noodle Broccoli 200 gram",
    channel: "B2C",
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  }
];
