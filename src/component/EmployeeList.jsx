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
    setEmployees(response?.data ? "respone" : null);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="container mx-auto p-4 align-middle">
      <h1 className="text-2xl font-bold mb-4 align-middle">Employee List</h1>
      {employees?.length === 0 ? (
        <p className="text-gray-500">No Employees in the system</p>
      ) : (
        <ul className="list-disc pl-5">
          {employees?.map((employee) => (
            <EmployeeItem
              key={employee.emp_id}
              employee={employee}
              onDelete={() => handleDelete(employee.emp_id)}
            />
          ))}
        </ul>
      )}
      <Link
        to="/add-employee"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Employee
      </Link>
    </div>
  );
};

export default EmployeeList;
