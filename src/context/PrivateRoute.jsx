import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation} from "react-router";

const PrivateRoute = ({ children }) => {
  const {currentUser} = use(AuthContext);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/auth/login" replace state={{from:location}} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
