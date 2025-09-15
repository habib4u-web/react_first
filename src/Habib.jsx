import { useState } from "react";

function Habib() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [savedData, setSavedData] = useState(null); // yeh button click ke baad data store karega

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedData(formData); // sirf button click pe data save hoga
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <b>Name</b>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <b>Email</b>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <b>Address</b>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <br />

      {savedData && ( // sirf tabhi show hoga jab button click ke baad savedData set ho
        <>
          <h2>Entered Data:</h2>
          <p>
            <b>Name:</b> {savedData.name}
          </p>
          <p>
            <b>Email:</b> {savedData.email}
          </p>
          <p>
            <b>Address:</b> {savedData.address}
          </p>
        </>
      )}
    </>
  );
}

export default Habib;
