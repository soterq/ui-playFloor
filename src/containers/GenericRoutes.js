import React from "react";
import { Route } from "react-router-dom";
import { Fade } from "@material-ui/core";

import { genericRoutes } from "../routes";

const GenericRoutes = () => {
  return genericRoutes?.map((route, idx) => {
    return (
      route.component && (
        <Route
          key={idx}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Fade>
              <route.component {...props} />
            </Fade>
          )}
        />
      )
    );
  });
};

export default GenericRoutes;
