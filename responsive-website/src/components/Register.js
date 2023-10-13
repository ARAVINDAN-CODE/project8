import React, { useState, useEffect, useRef } from 'react';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    mobile: '',
    email: '',
    gender: '',
    duration: '',
    qualification: '',
    purpose: '',
  });

  const popupRef = useRef(null);

  const generateReferenceId = () => {
    const randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return randomHex.toUpperCase();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [openSnackbar, setOpenSnackbar] = useState(null);

  useEffect(() => {
    // Set openSnackbar to false after 2 seconds (adjust the delay as needed)
    const timeoutId = setTimeout(() => {
      setOpenSnackbar(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({
      name: '',
      birthday: '',
      mobile: '',
      email: '',
      gender: '',
      duration: '',
      qualification: '',
      purpose: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* ... (other form fields) */}
        {/* Name */}
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="off" required />
        </label>

       {/* Birthday with calendar option */}
        <label>
          Birthday:
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
        </label>

        {/* Mobile */}
        <label>
          Mobile:
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label>

        {/* Email */}
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" required />
        </label>

        {/* Gender */}
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        {/* Hostel stay duration */}
        <label>
          Hostel Stay Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
        </label>

        {/* Qualification */}
        <label>
          Qualification:
          <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
        </label>

        {/* Purpose of stay */}
        <label>
          Purpose of Stay:
          <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} required />
        </label>


        {/* ... (other form fields) */}

        {/* Submit button */}
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Success message popup */}
      <div ref={popupRef} className="popup" style={{ display: openSnackbar ? 'block' : 'none' }}>
        <p>Details submitted. Reference ID: {generateReferenceId()}</p>
        <button onClick={handleCloseSnackbar}>Close</button>
      </div>
    </div>
  );
};

export default Register;
