import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./containers/Home";
import { data } from "./helpers/data";

const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
        {data.map((el) => (
          <Route
            key={Math.random()}
            path={el.link}
            exact
            component={require(`./containers/${el.folder}`).default}
          />
        ))}
      </Switch>
    </>
  );
};

export default App;
