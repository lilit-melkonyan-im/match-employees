import { Card, CardContent } from "@material-ui/core";
import React, { useState, useContext } from "react";
import FormikStepper from "./FormikStepper";
import PersonalData from "./PersonalData";
import ProfessionalDetails from "./ProfessionalDetails";
import Suggestions from "./Suggestions";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    suggestions: "",
};

const ThemeContext = React.createContext("formik");

export const useFormikContext = () => useContext(ThemeContext);

const FormikStep = ({ children }) => <>{children}</>;

export default function Registration() {
    const [selectedDate, handleDateChange] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    return (
        <Card>
            <CardContent>
                <ThemeContext.Provider
                    value={{ setSuggestions: setSuggestions }}
                >
                    <FormikStepper initialValues={initialValues}>
                        <FormikStep label="Personal Data">
                            <PersonalData
                                selectedDate={selectedDate}
                                handleDateChange={handleDateChange}
                            />
                        </FormikStep>
                        <FormikStep label="Professional Details">
                            <ProfessionalDetails />
                        </FormikStep>
                        <FormikStep label="Mentors Suggestion">
                            <Suggestions />
                        </FormikStep>
                    </FormikStepper>
                </ThemeContext.Provider>
            </CardContent>
        </Card>
    );
}
