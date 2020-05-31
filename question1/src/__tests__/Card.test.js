import React from "react";
import Card from "../components/Card";
import { mount } from "enzyme";
import { expect } from "chai";
import { MemoryRouter, Link } from "react-router-dom";

describe("<Card/>", () => {
  let item = {};

  beforeEach(() => {
    item = {
      id: 1011334,
      name: "3-D Man",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg",
      },
    };
  });

  it("Should render and show the Link", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Card item={item} />
      </MemoryRouter>
    );
    expect(wrapper.find(Link).text()).to.be.equal(item.name);
    expect(wrapper.find(Link).prop("to")).to.be.equal(`/card/${item.id}`);
  });
});
