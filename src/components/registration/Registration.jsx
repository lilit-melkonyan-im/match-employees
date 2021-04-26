import { Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
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

const FormikStep = ({ children }) => <>{children}</>;

const Registration = (props) => {
    const [selectedDate, handleDateChange] = useState(null);
    return (
        <Card>
            <CardContent>
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
            </CardContent>
        </Card>
    );
}

export default Registration;