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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label className="block text-gray-700">Contact Methods:</label>
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
            className="mt-2 text-blue-500"
          >
            Add Another Contact Method
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
