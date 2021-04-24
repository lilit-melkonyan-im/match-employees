import { Box } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";

const ProfessionalDetails = () => (
    <>
        <Box paddingBottom={2}>
            <Field
                fullWidth
                name="yearsOfExperience"
                type="number"
                component={TextField}
                label="Years Of Experience"
            />
        </Box>
    </>
);

export default ProfessionalDetails;
