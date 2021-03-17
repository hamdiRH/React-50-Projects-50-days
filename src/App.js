import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./containers/Home";
import { data } from "./helpers/data";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        {data.map((el) => (
          <Route
            path={`/${el.folder}`}
            exact
            component={require(`./containers/${el.folder}`)}
          />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
