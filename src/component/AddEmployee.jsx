import { useState } from "react";
import { createEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";
import ContactMethod from "./ContactMethod";
import FormField from "./FormField";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    address: { line1: "", city: "", country: "", zip: "" },
    contacts: [{ contact_method: "EMAIL", value: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address")) {
      const addressKey = name.split(".")[1];
      setEmployee((prevState) => ({
        ...prevState,
        address: { ...prevState.address, [addressKey]: value },
      }));
    } else {
      setEmployee((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleContactChange = (e, index) => {
    const { name, value } = e.target;
    setEmployee((prevState) => {
      const contacts = [...prevState.contacts];
      contacts[index][name] = value;
      return { ...prevState, contacts };
    });
  };

  const addContactMethod = () => {
    setEmployee((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts, { contact_method: "EMAIL", value: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(employee);
    navigate("/");
  };
  //   console.log(employee);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl text-center font-bold mb-6">Add Employee</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Name"
            name="name"
            value={employee?.name}
            onChange={handleChange}
          />
          <FormField
            label="Address Line 1"
            name="address.line1"
            value={employee?.address?.line1}
            onChange={handleChange}
          />
          <FormField
            label="City"
            name="address.city"
            value={employee?.address?.city}
            onChange={handleChange}
          />
          <FormField
            label="Country"
            name="address.country"
            value={employee?.address?.country}
            onChange={handleChange}
          />
          <FormField
            label="Zip Code"
            name="address.zip"
            value={employee?.address?.zip}
            onChange={handleChange}
          />
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Methods:
            </label>
            {employee?.contacts?.map((contact, index) => (
              <ContactMethod
                key={index}
                contact={contact}
                index={index}
                onChange={handleContactChange}
              />
            ))}
            <button
              type="button"
              onClick={addContactMethod}
              className="mt-2 text-blue-500 underline"
            >
              Add Another Contact Method
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
