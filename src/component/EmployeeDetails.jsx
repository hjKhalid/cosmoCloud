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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Details</h1>
      {employee ? (
        <div>
          <p>
            <strong>Name:</strong> {employee?.name}
          </p>
          <p>
            <strong>Emp ID:</strong> {employee?.emp_id}
          </p>
          <p>
            <strong>Address:</strong> {employee?.address?.line1},{" "}
            {employee?.address?.city}, {employee?.address?.country},{" "}
            {employee?.address?.zip}
          </p>
          <p>
            <strong>Contact Methods:</strong>
          </p>
          <ul className="list-disc pl-5">
            {employee.contacts.map((contact, index) => (
              <li key={index}>
                {contact?.contact_method}: {contact?.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
