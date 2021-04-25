import React, { useState } from "react";
import { Button, Box, Grid, Typography } from "@material-ui/core";

import suggestions from "../resources/suggestions";
import DataTable from "./DataTable";
import { useRegistrationContext } from "../Registration";
import { useModal } from "../../../hooks/common";
import Modal from "./Modal";
import DraggableSelectionsList from './DraggableSelectionsList';

const adaptSuggestions = () => {
    suggestions.map( sug => sug.id = '' + sug.id)
}

const filterSuggestions = (selection) => {
    const filtered = suggestions.filter((sug) => selection.includes("" + sug.id));
    return filtered;
}

const Suggestions = () => {
    const [selection, setSelection] = useState([]);
    const { setSuggestions } = useRegistrationContext();

    const handleRowsSelected = (selection) => {
        setSelection(selection);
        setSuggestions(selection);
    };

    const submit = () => {
        closeModal();
    };

    const [isOpen, openModal, closeModal] = useModal(false);

    adaptSuggestions();

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
                        disabled={selection.length !== 5 ? true : false}
                        onClick={() => openModal()}
                    >
                        Prioritize
                    </Button>
                </Grid>
            </Grid>
            <Modal
                open={isOpen}
                handleSubmit={submit}
                handleClose={closeModal}
                title="Prioritize Your Selection"
                leftBtnText="Cancel"
                rightBtnText="Done"
            >
                <DraggableSelectionsList selection={filterSuggestions(selection)} />
            </Modal>
        </>
    );
};

export default Suggestions;
