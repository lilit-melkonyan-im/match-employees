import { Card, CardContent } from "@material-ui/core";
import React, { useState, useContext } from "react";
import FormikStepper from "./components/FormikStepper";
import PersonalData from "./components/PersonalData";
import ProfessionalDetails from "./components/ProfessionalDetails";
import Suggestions from "./components/Suggestions";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    suggestions: "",
    experience: [
        {
          industry: "-",
          years: 1
        },
      ]
};

const RegistrationContext = React.createContext("formik");

export const useRegistrationContext = () => useContext(RegistrationContext);

const FormikStep = ({ children }) => <>{children}</>;

export default function Registration() {
    const [selectedDate, handleDateChange] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    return (
        <Card>
            <CardContent>
                <RegistrationContext.Provider
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
                </RegistrationContext.Provider>
            </CardContent>
        </Card>
    );
}
