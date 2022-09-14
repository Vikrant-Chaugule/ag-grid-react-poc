import React from "react";

const AddSupplier = (params) => {
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

const rowSpan = (params) => {
  const nodeApi = params.api;
  const skuNumber = params.data.skuNumber;
  const gridData = RowData
  // nodeApi.forEachNode((rowNode, index) => {
  //   console.log(rowNode)
  //   gridData.push(rowNode.data)
  // });
  console.log("span", gridData.filter((e) => e.skuNumber === 1000001).length); // getData() with return the original rowData array.
  return gridData.filter((e) => e.skuNumber === 1000001).length;
}

export const ChannelRender = (params) => {
  // console.log(params);
  const {channel} = params.data;
  return (<div className="show-render">
    {channel.map((value, idx) => {
      return <div key={idx}>{value.code}</div>
    })}
  </div>);
}

export const createShowCellRenderer= () =>  {
  const ShowCellRenderer = ()  => {}
  ShowCellRenderer.prototype.init = function (params) {
    console.log(params.value)
    var cellBlank = !params.value;
    if (cellBlank) {
      return null;
    }
    this.ui = document.createElement('div');
    this.ui.innerHTML = params.value.map(data => '<div class="show-name">' +
    data.code +
    '' +
    '</div>' )
  };
  ShowCellRenderer.prototype.getGui = function () {
    return this.ui;
  };
  return ShowCellRenderer;
}

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
    rowSpan: rowSpan,
    cellClassRules: { 'show-cell': 'value !== undefined' }
    // cellRenderer: ShowCellRenderer,
  },
  {
    field: "skuDescription",
    editable: true,
    rowSpan: (params) => {
      const {channel} = params.data;
      console.log("channel", channel.length)
      return channel.length;
    }
  },
  {
    field: "channel",
    rowSpan: (params) => {
      const {channel} = params.data;
      console.log("channel", channel.length)
      return channel.length;
    },
    cellClassRules: { 'show-cell': 'value !== undefined' },
    cellRenderer: ChannelRender,
    editable: true,
  },
  { field: "supplier", rowSpan: (params) => 1, cellRenderer: AddSupplier },
  { field: "category", rowSpan: (params) => 1 }
];

export const RowData = [
  {
    id: "d4d86a02-fa9f-444e-bb4d-e83a429c5edf",
    skuNumber: 1000001,
    skuDescription: "Javara Veggie Noodle Basil and Garlic 200 gram",
    channel: [{
      code: "B2B"
    }],
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  },
  {
    id: "a151edc7-c73e-468b-bef8-a26c43229a07",
    skuNumber: 1000001,
    skuDescription: "Javara Veggie Noodle Broccoli 200 gram",
    channel: [{
      code: "B2C"
    }],
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  },
  {
    id: "a151edc7-c73e-468b-bef8-a26c43229a08",
    skuNumber: 1000001,
    skuDescription: "Javara Veggie Noodle Broccoli 200 gram",
    channel: [{
      code: "B2D"
    }],
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  },
  {
    id: "a151edc7-c73e-468b-bef8-a26c43229a08",
    skuNumber: 1000002,
    skuDescription: "Javara Veggie Noodle Broccoli 200 gram",
    channel: [{
      code: "B2B"
    }],
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  },
  {
    id: "a151edc7-c73e-468b-bef8-a26c43229a08",
    skuNumber: 1000003,
    skuDescription: "Javara Veggie Noodle Broccoli 200 gram",
    channel: [{
      code: "B2B"
    }],
    supplier: "Agus",
    category: "Carbs, Grains, Nuts"
  }
];
