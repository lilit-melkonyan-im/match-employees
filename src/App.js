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
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Registration from "./components/registration/Registration";
import Profile from "./components/profile/Profile";

const useStyles = makeStyles({
    Container: {
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
    },
    AppBar: {
        alignItems: "center",
        position: "fixed",
    },
});

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <AppBar className={classes.AppBar}>
                    <Toolbar variant="dense">
                        <Typography variant="h6">
                            Mentoring Program Registration
                        </Typography>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Container className={classes.Container}>
                    <Box marginTop={10} alignItems="center">
                        <Routes />
                    </Box>
                </Container>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}

const Routes = () => (
    <Router>
        <Route exact path="/">
            <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/registration" component={Registration} />
        <Route path="/profile" component={Profile} />
    </Router>
);

export default App;
