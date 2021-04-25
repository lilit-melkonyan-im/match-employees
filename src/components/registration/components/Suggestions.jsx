import React, { useState } from "react";
import { Button, Box, Grid, Typography } from "@material-ui/core";
import suggestions from "../resources/suggestions";
import DataTable from "./DataTable";
import { useRegistrationContext } from "../Registration";

const Suggestions = () => {
    const [rows, setRows] = useState([]);
    const { setSuggestions } = useRegistrationContext();

    const handleRowsSelected = (rows) => {
        setRows(rows);
        setSuggestions(rows);
    };

    return (
        <>
            <Box paddingBottom={2}>
                <DataTable
                    rows={suggestions}
                    name="suggestions"
                    setSelection={handleRowsSelected}
                />
            </Box>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="p">
                        Make sure you've choosen 5 employees.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={rows.length !== 5 ? true : false}
                    >
                        Prioritize
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Suggestions;
