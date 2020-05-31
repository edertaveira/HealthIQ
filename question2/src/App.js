import React from "react";
import HandyAuth from "./common/HandyAuth";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import PageLoading from "./common/PageLoading";
import { Layout } from "antd";
import configureStore from "./storage/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./common/Container";
import Sidebar from "./common/Sidebar";

import "./App.scss";

const { Header } = Layout;

const renderComponent = (AsyncFunc) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Sidebar />
      </Header>
      <Container AsyncFunc={AsyncFunc} />
    </Layout>
  );
};

const asyncHome = Loadable({
  loader: () => import("./components/Home"),
  loading: PageLoading,
});

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HandyAuth>
          <Router>
            <Route exact path={"/"} render={() => renderComponent(asyncHome)} />
          </Router>
        </HandyAuth>
      </PersistGate>
    </Provider>
  );
}

export default App;
