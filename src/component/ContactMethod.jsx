const ContactMethod = ({ contact, index, onChange }) => {
    console.log(contact);
  return (
    <>
      <div className="flex space-x-2 mt-2">
        <select
          name="contact_method"
          value={contact.contact_method}
          onChange={(e) => onChange(e, index)}
          className="block w-1/3 h-8 border-gray-300 rounded-md shadow-sm"
        >
          <option value="EMAIL">EMAIL</option>
          <option value="PHONE">PHONE</option>
        </select>
        <input
          type="text"
          name="value"
          value={contact.value}
          onChange={(e) => onChange(e, index)}
          required
          className="block w-2/3 border-gray-300 rounded-md shadow-sm"
        />
      </div>
    </>
  );
};

export default ContactMethod;
