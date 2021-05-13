import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import ResetPassword from "pages/Reinitialisation"
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";

export default function App() {
    return (
        
    <AnimationRevealPage>
            <Router >
                <Route exact path="/" ><SaaSProductLandingPage/></Route> 
                <Route exact path="/connexion"><LoginPage/></Route>
                <Route exact path="/inscription"><SignupPage/></Route>
                <Route exact path="/reinitialisation-mot-de-passe"><ResetPassword/></Route>
            </Router>
    </AnimationRevealPage>
    );
    
}

