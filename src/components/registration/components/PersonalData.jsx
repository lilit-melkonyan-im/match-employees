import { Box } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { DatePicker } from "@material-ui/pickers";

const PersonalData = ({ selectedDate, handleDateChange }) => (
    <>
        <Box paddingBottom={2}>
            <Field
                fullWidth
                name="firstName"
                component={TextField}
                label="First Name"
            />
        </Box>
        <Box paddingBottom={2}>
            <Field
                fullWidth
                name="lastName"
                component={TextField}
                label="Last Name"
            />
        </Box>
        <Box paddingBottom={2}>
            <Field
                fullWidth
                name="email"
                component={TextField}
                label="Email Address"
            />
        </Box>
        <Box paddingBottom={2}>
            <DatePicker
                disableFuture
                name="dateOfBirth"
                openTo="year"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                label="Date of birth"
                views={["year", "month", "date"]}
                value={selectedDate}
                onChange={handleDateChange}
            />
        </Box>
        <Box paddingBottom={2}>
            <div id="my-radio-group">Gender</div>
        </Box>
        <Box paddingBottom={2}>
            <label>
                <Field type="radio" name="gender" value="male" />
                Male
            </label>
            <label>
                <Field type="radio" name="gender" value="female" />
                Female
            </label>
        </Box>
    </>
);

export default PersonalData;
