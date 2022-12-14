import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Contacts } from "./contacts";
import { Action, Actions } from "./actions";
import { Record } from "./record";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contacts"} element={<Contacts />} />
      <Route path={"/actions"} element={<Actions />} />
      <Route path={"/action"} element={<ActionsRoute />}>
        <Route path={":id"} element={<Action />} />
      </Route>
      <Route path={"/record"} element={<Record />} />
    </Routes>
  );
};

const ActionsRoute = () => {
  return <Outlet />;
};

export default App;
