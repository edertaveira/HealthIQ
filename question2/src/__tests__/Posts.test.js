import React from "react";
import { endpoint } from "../common/constants/endpoint";
import Home from "../components/Home";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../storage/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { render, waitForElement, waitFor, screen, findByTestId } from "@testing-library/react";
import axiosMock from "axios";
import { List } from "antd";
import { expect } from "chai";
import Posts from "../components/Posts";
jest.mock("axios");

describe("<Post />", () => {
  beforeAll(() => {});
  const list = [
    {
      userId: 1,
      id: 1,
      user: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      user: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ];

  it("should render list", async () => {
    const wrapper = mount(<Posts search={""} list={list} />);
    expect(wrapper.find(List)).to.have.lengthOf(1);
    expect(wrapper.find(List.Item)).to.have.lengthOf(list.length);
  });

  it("should render list from search value", async () => {
    const wrapper = mount(<Posts search="sunt aut" list={list} />);
    expect(wrapper.find(List)).to.have.lengthOf(1);
    expect(wrapper.find(List.Item)).to.have.lengthOf(1);
  });

  it("should handle either search is undefined", async () => {
    const wrapper = mount(<Posts search={undefined} list={list} />);
    expect(wrapper.find(List)).to.have.lengthOf(1);
    expect(wrapper.find(List.Item)).to.have.lengthOf(list.length);
  });

  it("should handle either search is null", async () => {
    const wrapper = mount(<Posts search={null} list={list} />);
    expect(wrapper.find(List)).to.have.lengthOf(1);
    expect(wrapper.find(List.Item)).to.have.lengthOf(list.length);
  });
});
