import { Component } from "react";
import { userLoggedInAction } from "../reducers/actions/userActions";
import moment from "moment";
import md5 from "md5";
import { connect } from "react-redux";

class HandyAuth extends Component {
  async addClientId() {
    if (!this.props.clientId) {
      const clientId = md5(moment().unix());
      this.props.dispatch(userLoggedInAction(clientId));
    }
  }

  render() {
    this.addClientId();
    return this.props.children;
  }
}

const mapStateToProps = (appState) => ({
  clientId: appState.user.clientId,
});

export default connect(mapStateToProps)(HandyAuth);
