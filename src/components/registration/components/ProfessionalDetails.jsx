import {
    Box,
    Button,
    IconButton,
    Tooltip,
    Typography,
} from "@material-ui/core";
import { Field, FieldArray } from "formik";
import { TextField, Select } from "formik-material-ui";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import constants from "../resources/constants";

const ProfessionalDetails = () => {
    return (
        <>
            <Box paddingBottom={2}>
                <Box paddingBottom={2}>
                    <Typography component="h6">
                        Describe your work experience
                    </Typography>
                </Box>
                <FieldArray
                    name="experience"
                    render={({ form, remove, push }) => (
                        <div>
                            {form.values.experience.length > 0 &&
                                form.values.experience.map((exp, index) => (
                                    <>
                                        <ExperienceField
                                            form={form}
                                            remove={remove}
                                            index={index}
                                            push={push}
                                        />
                                   
                                    </>
                                ))}
                        </div>
                    )}
                />
            </Box>
        </>
    );
};

function ExperienceField({ form, remove, push, index }) {
    return (
        <>
        <Box paddingBottom={2} key={index}>
            <Field
                as="select"
                component={Select}
                fullWidth
                label="Industry"
                name={`experience.${index}.industry`}
            >
                {constants.industries.map((industry) => (
                    <option value={industry}>{industry}</option>
                ))}
            </Field>
            </Box>
            <Box paddingBottom={2}>
            <Field
                fullWidth
                name={`experience.${index}.years`}
                type="number"
                component={TextField}
                label="How many years of work experience do you have?"
            />
            </Box>
            <Tooltip title="Remove Experience" aria-label="remove">
                <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => form.values.experience.length !== 1 ? remove(index) : null}
                >
                    <HighlightOffIcon />
                </IconButton>
            </Tooltip>
            {index + 1 === form.values.experience.length && (
                <AddButton push={push} />
            )}
        </>
    );
}

function AddButton({ push }) {
    return (
        <Tooltip title="Add Experience" aria-label="add">
            <IconButton
                variant="contained"
                color="primary"
                onClick={() =>
                    push({
                        industry: "",
                        years: 1,
                    })
                }
            >
                <AddCircleOutlineIcon />
            </IconButton>
        </Tooltip>
    );
}

export default ProfessionalDetails;
