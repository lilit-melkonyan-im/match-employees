import React, { useState } from "react";
import { Button, Box, Grid, Typography } from "@material-ui/core";

import suggestions from "../resources/suggestions";
import DataTable from "./DataTable";
import { useModal } from "../../../hooks/common";
import Modal from "./Modal";
import DraggableSelectionsList from "./DraggableSelectionsList";

import {useFormContext} from './FormikStepper';

const adaptSuggestions = () => {
    suggestions.map((sug) => (sug.id = "" + sug.id));
};

const filterSuggestions = (rowsSelecton) => {
    const filtered = suggestions.filter((sug) =>
        rowsSelecton.includes("" + sug.id)
    );
    return filtered;
};

const Suggestions = () => {
    const [rowsSelecton, setRowsSelecton] = useState([]);
    const [isOpen, openModal, closeModal] = useModal(false);
    const { setPrioritized, setSelectedIds } = useFormContext();

    const handleRowsSelected = (rowsSelecton) => {
        setRowsSelecton(rowsSelecton);
    };

    const handleSubmit = () => {
        setPrioritized(true);
        closeModal();
    };

    const handleClose = () => {
        closeModal();
    };

    adaptSuggestions();

    return (
        <>
            <Box paddingBottom={2}>
                <DataTable
                    rows={suggestions}
                    name="suggestions"
                    setRowsSelecton={handleRowsSelected}
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
                        disabled={rowsSelecton.length !== 5 ? true : false}
                        onClick={() => openModal()}
                    >
                        Prioritize
                    </Button>
                </Grid>
            </Grid>
            <Modal
                open={isOpen}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                title="Prioritize Your Selection"
                leftBtnText="Cancel"
                rightBtnText="Done"
            >
                <DraggableSelectionsList
                    selection={filterSuggestions(rowsSelecton)}
                    setSelectedIds={setSelectedIds}
                />
            </Modal>
        </>
    );
};

export default Suggestions;
