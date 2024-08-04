const FormField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-gray-700">{label}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block h-10 w-full border-gray-300 rounded-md shadow-sm"
    />
  </div>
);

export default FormField;
