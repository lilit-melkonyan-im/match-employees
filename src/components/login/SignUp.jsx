import {
    Card,
    CardContent,
    Box,
    Button,
    CircularProgress,
    Typography,
    Link,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { useHistory } from "react-router-dom";

import SignupSchema from "./validation/SignupSchema";

const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
};

const Login = () => {
    const history = useHistory();
    const onSubmit = (values) => {
        console.log("Values are ", values);
        history.push('/registration');
    };
    return (
        <Card>
            <CardContent>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    validateOnChange={false}
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
                                    type="password"
                                />
                                <Field
                                    fullWidth
                                    name="confirmPassword"
                                    component={TextField}
                                    label="Confirm Password"
                                    type="password"
                                />
                            </Box>
                            <Box paddingBottom={2}>
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
                            </Box>
                            <Typography component="div">
                                Already have an account?{" "}
                                <Link href="/login">Login</Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
};

export default Login;
