import request from "supertest";
import { endpoint, privatekey, publickey } from "../common/constants/endpoint";
import md5 from "md5";
import moment from "moment";
import { expect } from "chai";

describe("<Dashboard />", () => {
  let params = {};

  beforeAll(() => {
    const ts = moment().unix();
    params = {
      apikey: publickey,
      ts,
      hash: md5(ts + privatekey + publickey),
    };
  });

  it("Check API endpoint returning characters", () => {
    request(endpoint)
      .get("/characters")
      .query(params)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body).to.exist;
      });
  });
});
