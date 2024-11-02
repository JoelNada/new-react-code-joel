import { useState, Fragment } from "react";
import NavBar from "./components/NavBar";
import FormComponent from "./components/FormComponent";
import { Route, Routes } from "react-router-dom";
import Records from "./components/Records";

function App() {
  return (
    <Fragment>
      <NavBar />
      <br />
      <Routes>
        <Route exact path="/" element={<FormComponent />} />
        <Route exact path="/records" element={<Records />} />
      </Routes>
    </Fragment>
  );
}

export default App;
