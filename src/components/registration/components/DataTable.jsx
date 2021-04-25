import React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function DataTable({ rows, name, setSelection }) {
    const columns = Object.keys(rows[0]).map((field) => ({
        field: field,
        headerName: field
            .split("_")
            .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
            .join(" "),
        sortable: false,
        width: 130,
    }));
    const updatedColumns = columns.filter((obj) => obj.field !== "id");

    return (
        <div style={{ width: "100%" }}>
            <DataGrid
                hideFooterPagination
                autoHeight
                rows={rows}
                columns={updatedColumns}
                checkboxSelection
                name={name}
                onSelectionModelChange={({ selectionModel }) => {
                    const newSelectionModel = selectionModel;
                    if (newSelectionModel.length > 5) {
                    } else {
                        setSelection(selectionModel);
                    }
                }}
            />
        </div>
    );
}
