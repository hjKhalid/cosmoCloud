import { Link } from "react-router-dom";

const EmployeeItem = ({ employee, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <Link
        to={`/employee/${employee._id}`}
        className="text-xl font-semibold text-blue-500 hover:underline"
      >
        {employee.name}
      </Link>
      <p className="text-gray-600">Employee ID: <span className="font-bold">{employee._id}</span></p>
      <button
        onClick={onDelete}
        className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default EmployeeItem;
