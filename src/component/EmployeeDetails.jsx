import { useEffect, useState } from "react";
import { getEmployee } from "../services/employeeService";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  const fetchEmployee = async () => {
    const response = await getEmployee(id);
    setEmployee(response.data);
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Employee Details</h1>
      {employee ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {employee.name}
          </h2>
          <p className="text-gray-600">
            <strong>Employee ID:</strong>{" "}
            <span className="font-bold">{employee._id}</span>
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong>{" "}
            <span className="font-bold">
              {employee.address?.line1}, {employee.address?.city},{" "}
              {employee.address?.country}, {employee.address?.zip}
            </span>
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Contact Methods
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              {/* {employee.contacts?.map((contact, index) => ( */}
                <li >
                  {employee.contacts?.contact_method}:{" "}
                  <span className="font-bold">{employee.contacts?.value}</span>
                </li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
