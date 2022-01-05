import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTES from "../Constants";
import Home from "../../pages";
import Collocations from "../../pages/Collocations";
import AddCollocation from "../../pages/Admin/AddCollocation";
import UpdateCollocations from "../../pages/Admin/UpdateCollocations";
import Login from "../../pages/auth/Signin";
import NotFound from "../../pages/PageNotFound";
import Layout from "../../layout/index";
import Admin from "./Admin"
export const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Admin exact component={Home} path={ROUTES.HOME} />
          <Admin component={Collocations} path={ROUTES.COLLOCATIONS} />

          {/* Admin */}
          <Admin component={AddCollocation} path={ROUTES.ADD_COLLOCATION} />
          <Admin component={UpdateCollocations} path={ROUTES.UPDATE_COLLOCATIONS} />
          
          {/* Not Found And Login*/}
          <Admin component={Login} path={ROUTES.LOGIN} />
          <Admin component={NotFound} path={ROUTES.NOT_FOUND} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default AppRouter;
