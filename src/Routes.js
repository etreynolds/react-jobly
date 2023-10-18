import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import CompanyDetail from "./companies/CompanyDetail";
import CompanyList from "./companies/CompanyList";
import JobList from "./jobs/JobList";
import ProfileForm from "./ProfileForm";


function Routes() {

    return (
        <div>
            {/* <h1>This is the routes page</h1> */}
            {/* <BrowserRouter> */}
            <Switch>

                <Route exact path="/" component={Homepage} />

                <Route exact path="/companies">
                    <CompanyList />
                </Route>

                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>

                <Route exact path="/jobs">
                    <JobList />
                </Route>

                <Route exact path="/login">
                    <LoginForm />
                </Route>

                <Route exact path="/signup">
                    <SignupForm />
                </Route>

                <Route exact path="/profile">
                    <ProfileForm />
                </Route>

            </Switch>
            {/* </BrowserRouter> */}
        </div>
    )
}



export default Routes;