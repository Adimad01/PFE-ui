import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
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

