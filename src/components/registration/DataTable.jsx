import React, {useState} from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function DataTable({ rows, name, setSelection }) {
    const columns = Object.keys(rows[0]).map((field) => ({
        field: field,
        headerName: field.split('_').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' '),
        sortable: false,
        width: 130,
    }));
    const updatedRows = rows.map((row, index) => {
        return { ...row, id: index + 1 };
    });
    return (
        <div style={{ width: "100%" }}>
            <DataGrid
                hideFooterPagination
                autoHeight
                rows={updatedRows}
                columns={columns}
                checkboxSelection
                name={name}
                onSelectionModelChange={({selectionModel}) => {
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
