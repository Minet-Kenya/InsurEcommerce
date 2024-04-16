import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../forms/Authentication/Authentication";

function PrivateRoute({ children }) {
  let { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/auth" replace />;
  }
  return children;
}

export default PrivateRoute;
