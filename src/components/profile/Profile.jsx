import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";
import suggestions from "../registration/resources/suggestions";
import DataTable from "../registration/components/DataTable";

const Profile = (props) => {
    const { user } = props;
    const history = useHistory();
    const userData = [];
    let userSuggestions = {};

    Object.keys(user).forEach((key) => {
        let value = user[key];
        if (key === "experience") {
            const expArray = user[key];
            userData.push(<div>{key}:</div>);
            expArray.map((exp) => {
                Object.keys(exp).forEach((key) => {
                    userData.push(
                        <div>
                            {key}: {exp[key] || "-"}
                        </div>
                    );
                });
            });
        } else if (key === "suggestions") {
            const suggestionIds = user[key];
            userSuggestions = suggestions.filter((sug) =>
                suggestionIds.includes("" + sug.id)
            );
        } else {
            userData.push(
                <div>
                    {key}: {user[key] || "-"}
                </div>
            );
        }
    });

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">My Profile</Typography>
                <Box>{userData}</Box>
                <Box>
                    {!!userSuggestions.length && (
                        <DataTable
                            rows={userSuggestions}
                            checkboxSelection={false}
                        />
                    )}
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        history.push({
                            pathname: "/registration",
                            state: {
                                update: true,
                            },
                        });
                    }}
                >
                    Update Your Suggestions
                </Button>
            </CardContent>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Profile);
