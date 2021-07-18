import React from "react";

import New from "./Weather/New";
import "antd/dist/antd.css";
import Api from "./Api/Api";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from "./Api/Detail";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Api} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
