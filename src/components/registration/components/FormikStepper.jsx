import {
    Button,
    CircularProgress,
    Grid,
    Step,
    StepLabel,
    Stepper,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ProfileSchema from "../validation/ProfileSchema";

const FormContext = React.createContext("formik");

export const useFormContext = () => useContext(FormContext);

const FormikStepper = ({ children, ...props }) => {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);
    const [prioritized, setPrioritized] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const history = useHistory();

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={ProfileSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    values.suggestions = selectedIds;
                    props.addUser(values);
                    setCompleted(true);
                    history.push('/profile');
                } else {
                    setStep((s) => s + 1);
                    helpers.setTouched({});
                }
            }}
        >
            {({ isSubmitting, isValid }) => (
                <Form autoComplete="off">
                    <Stepper alternativeLabel activeStep={step}>
                        {childrenArray.map((child, index) => (
                            <Step
                                key={child.props.label}
                                completed={step > index || completed}
                            >
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <FormContext.Provider
                        value={{
                            setPrioritized: setPrioritized,
                            setSelectedIds: setSelectedIds,
                        }}
                    >
                        {currentChild}
                    </FormContext.Provider>
                    <Grid container spacing={2}>
                        {step > 0 ? (
                            <Grid item>
                                <Button
                                    disabled={isSubmitting}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        isValid && setStep((s) => s - 1);
                                        setPrioritized(false);
                                    }}
                                >
                                    Back
                                </Button>
                            </Grid>
                        ) : null}
                        <Grid item>
                            <Button
                                startIcon={
                                    isSubmitting ? (
                                        <CircularProgress size="1rem" />
                                    ) : null
                                }
                                disabled={
                                    isSubmitting ||
                                    (isLastStep() && !prioritized)
                                }
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                {isSubmitting
                                    ? "Submitting"
                                    : isLastStep()
                                    ? "Submit"
                                    : "Next"}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUser) => {
            dispatch({ type: "ADD-USER", newUser: newUser });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikStepper);
