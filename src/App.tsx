import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/todo";
import { Route, Routes } from "react-router-dom";
import { EmployeeClass } from "./components/employeeclass";
import Employee from "./components/employeefunctional";
import LoginForm from "./components/form";
import Table from "./components/table";
import Mainpage from "./components/mainpage";

function App() {
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route
            path="/test"
            element={
              <div className="container">
                <Todo />
                <EmployeeClass />
                <Employee />
                <LoginForm />
                <Table />
              </div>
            }
          />
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
