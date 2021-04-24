import {
    Card,
    CardContent,
    Box,
    Button,
    CircularProgress,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { useHistory } from 'react-router-dom';

import SignupSchema from './validation/SignupSchema';

const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
};

const Login = () => {
    const history = useHistory();
    const [ loggedIn, setLoggidIn ] = useState(false);
    const onSubmit = values => {
        console.log('Values are ',values)
        setLoggidIn(true)
        // history.push('/profile');
    }
    return (
        <Card>
            <CardContent>
                {loggedIn ? 
                'Welcome!' :
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form autoComplete="off">
                            <Box paddingBottom={2}>
                                <Field
                                    fullWidth
                                    name="email"
                                    component={TextField}
                                    label="Login"
                                />
                                <Field
                                    fullWidth
                                    name="password"
                                    component={TextField}
                                    label="Password"
                                />
                                <Field
                                    fullWidth
                                    name="confirmPassword"
                                    component={TextField}
                                    label="Confirm Password"
                                />
                            </Box>
                            <Button
                                startIcon={
                                    isSubmitting ? (
                                        <CircularProgress size="1rem" />
                                    ) : null
                                }
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </Form>
                    )}
                </Formik>}
            </CardContent>
        </Card>
    );
};

export default Login;
