import { Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import FormikStepper from "./FormikStepper";
import PersonalData from "./PersonalData";
import ProfessionalDetails from "./ProfessionalDetails";
import Suggestions from "./Suggestions";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
};

const FormikStep = ({ children }) => <>{children}</>;

export default function ProfileFillingForm() {
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
                    <FormikStep label="More Info">
                        <Suggestions />
                    </FormikStep>
                </FormikStepper>
            </CardContent>
        </Card>
    );
}
