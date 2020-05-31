import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ redirectTo, roles, role, render, user, ...routeConfig }) => {
  const renderProtectedRoute = (props) => {
    const autenticated = user != null;
    const authorized = !roles.length || roles.includes(role);
    if (autenticated && authorized) {
      return render(props);
    }
    return <Redirect to={redirectTo(props)} />;
  };
  return <Route render={renderProtectedRoute} {...routeConfig} />;
};

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.func,
};

ProtectedRoute.defaultProps = {
  redirectTo: () => "/",
  roles: [],
};

export default connect((state) => {
  return {
    user: state.user.id,
    role: state.user.role_id,
  };
})(ProtectedRoute);
