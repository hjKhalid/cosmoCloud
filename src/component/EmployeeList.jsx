import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import EmployeeItem from "./EmployeeItem";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response?.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">Employee List</h1>
      {employees.length === 0 ? (
        <p className="text-gray-500 text-lg">No Employees in the system</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <EmployeeItem
              key={employee._id}
              employee={employee}
              onDelete={() => handleDelete(employee._id)}
            />
          ))}
        </div>
      )}
      <Link
        to="/add-employee"
        className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
      >
        Add Employee
      </Link>
    </div>
  );
};

export default EmployeeList;
