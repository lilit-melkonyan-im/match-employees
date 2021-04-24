import React from "react";
import { theme } from "./theme";
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    ThemeProvider,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import ProfileFillingForm from "./components/profile/ProfileFillingForm";

const useStyles = makeStyles({
    Container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    AppBar: {
        alignItems: "center",
        position: "fixed"
    }
});

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <AppBar className={classes.AppBar}>
                    <Toolbar variant="dense">
                        <Typography variant="h6">Mentoring Program Registration</Typography>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Container className={classes.Container}>
                    <Box marginTop={10} width="500px" alignItems="center">
                        <Router>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route
                                path="/profile"
                                component={ProfileFillingForm}
                            />
                        </Router>
                    </Box>
                </Container>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}

export default App;
