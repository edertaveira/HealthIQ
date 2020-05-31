import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import { expect } from "chai";
import Cards from "../components/Cards";

describe("<App />", () => {
  it("render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Cards));
  });
});
