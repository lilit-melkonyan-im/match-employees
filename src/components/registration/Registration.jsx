import { Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";

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
    const location = useLocation();
    const { update } = location.state || false;
    const { user } = props;
    return (
        <Card>
            <CardContent>
                <FormikStepper initialValues={user}>
                    {!update && (
                        <FormikStep label="Personal Data">
                            <PersonalData
                                selectedDate={selectedDate}
                                handleDateChange={handleDateChange}
                            />
                        </FormikStep>
                    )}
                    {!update && (
                        <FormikStep label="Professional Details">
                            <ProfessionalDetails />
                        </FormikStep>
                    )}
                    <FormikStep label="Mentors Suggestion">
                        <Suggestions />
                    </FormikStep>
                </FormikStepper>
            </CardContent>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Registration);