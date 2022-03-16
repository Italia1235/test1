import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

export const RedirectHOC = (Component: any) => {
  class RedirectComponent extends React.Component<any> {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  const mapState = (state: AppStateType) => ({ isAuth: state.auth.isAuth });
  return connect(mapState)(RedirectComponent);
};
