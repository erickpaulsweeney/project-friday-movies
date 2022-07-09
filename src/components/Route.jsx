import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import MoviePage from "./Movie Page";
import HomePage from "./Home Page"


export default function WithRoute() {
    return (
        <Router>
            <Switch>
                <Route path={`/movies/:id`}>
                    <MoviePage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}