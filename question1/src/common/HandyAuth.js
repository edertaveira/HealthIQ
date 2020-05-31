import { Component } from "react";
import axios from "axios";
import { privatekey, publickey } from "../common/constants/endpoint";
import moment from "moment";
import md5 from "md5";

class HandyAuth extends Component {
  async addToken() {
    const ts = moment().unix();
    axios.defaults.params = {};
    axios.defaults.params["apikey"] = publickey;
    axios.defaults.params["ts"] = ts;
    axios.defaults.params["hash"] = md5(ts + privatekey + publickey);
  }

  render() {
    this.addToken();
    return this.props.children;
  }
}

export default HandyAuth;
