import { expect } from "chai";
import moment from "moment";
import md5 from "md5";
import request from "supertest";
import { endpoint, privatekey, publickey } from "../common/constants/endpoint";
import "../common/utils";

describe("<Details/>", () => {
  let params = {};
  const id = 1011334;

  beforeAll(async () => {
    const ts = moment().unix();
    params = {
      apikey: publickey,
      ts,
      hash: md5(ts + privatekey + publickey),
    };
  });

  it("Check API endpoint returning character details by ID", () => {
    request(endpoint)
      .get("/characters/" + id)
      .query(params)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body).to.exist;
      });
  });
});
