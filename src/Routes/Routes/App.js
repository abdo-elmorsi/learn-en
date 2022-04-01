import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTES from "../Constants";
import Home from "../../pages";

// Tenses
import PastTens from "../../pages/pastTense";
import PastSimple from "../../pages/pastTense/PastSimple";

// collocations
import Collocations from "../../pages/Collocations";
import CollocationsControls from "../../pages/Admin/Collocations";

// PhrasalVerb
import PhrasalVerbs from "../../pages/PhrasalVerbs";
import PhrasalVerbsControls from "../../pages/Admin/PhrasalVerbs";

// Idioms  Expressions
import IdiomsExpressions from "../../pages/IdiomsExpressions";

// auth
import SignIn from "../../pages/auth/Signin";
import SignUp from "../../pages/auth/Signup";

import NotFound from "../../pages/PageNotFound";
import Layout from "../../layout/index";
import Admin from "./Admin";
export const history = createBrowserHistory();
const AppRouter = () => {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Admin exact component={Home} path={ROUTES.HOME} />
                    {/* Tenses */}
                    <Admin component={PastTens} path={ROUTES.PAST_TENS} />
                    <Admin component={PastSimple} path={ROUTES.PAST_SIMPLE} />

                    <Admin
                        component={Collocations}
                        path={ROUTES.COLLOCATIONS}
                    />
                    <Admin
                        component={PhrasalVerbs}
                        path={ROUTES.PHRASAL_VERBS}
                    />
                    <Admin
                        component={IdiomsExpressions}
                        path={ROUTES.IDIOMS_EXPRESSIONS}
                    />

                    {/* Admin */}
                    <Admin
                        component={CollocationsControls}
                        path={ROUTES.COLLOCATIONS_CONTROL}
                    />

                    <Admin
                        component={PhrasalVerbsControls}
                        path={ROUTES.PHRASAL_VERBS_CONTROL}
                    />

                    {/* Not Found And Login*/}
                    <Admin component={SignIn} path={ROUTES.SIGN_IN} />
                    <Admin component={SignUp} path={ROUTES.SIGN_UP} />

                    <Admin component={NotFound} path={ROUTES.NOT_FOUND} />
                </Switch>
            </Layout>
        </Router>
    );
};
export default AppRouter;
