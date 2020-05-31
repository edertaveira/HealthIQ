import React from "react";
import Card from "../components/Card";
import Cards from "../components/Cards";
import { render, mount, shallow } from "enzyme";
import { expect } from "chai";
import { MemoryRouter, Link } from "react-router-dom";
import "../common/utils";

describe("<Cards/>", () => {
  let list = [];
  beforeEach(() => {
    list = [
      {
        id: 1011334,
        name: "3-D Man",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
          extension: "jpg",
        },
      },
      {
        id: 1017100,
        name: "A-Bomb (HAS)",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
          extension: "jpg",
        },
      },
    ];
  });

  it("Should render", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Cards
          list={list}
          total={list.length}
          getList={jest.fn()}
          setHasMore={jest.fn()}
          loading={false}
          hasMore={true}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(Card)).to.have.lengthOf(list.length);
  });
});
