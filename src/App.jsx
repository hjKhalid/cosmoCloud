// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import EmployeeDetails from "./component/EmployeeDetails";
import AddEmployee from "./component/AddEmployee";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
