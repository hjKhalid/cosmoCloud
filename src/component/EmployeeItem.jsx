import { Link } from "react-router-dom";

const EmployeeItem = ({ employee, onDelete }) => (
  <li className="mb-2">
    <Link
      to={`/employee/${employee.emp_id}`}
      className="text-blue-500 hover:underline"
    >
      {employee.name} - {employee.emp_id}
    </Link>
    <button onClick={onDelete} className="ml-4 text-red-500 hover:text-red-700">
      Delete
    </button>
  </li>
);

export default EmployeeItem;
