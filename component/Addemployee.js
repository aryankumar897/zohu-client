"use client"
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    insuranceType: '',
    department: '',
    typeOfLeave: '',
    startDate: '',
    endDate: '',
    carNumber: '',
    insuranceCompany: '',
    premium: '',
    grossPremium: '',
    reason: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/add-employee', employeeData);
      alert(response.data.message);
      setEmployeeData({
        employeeId: '',
        insuranceType: '',
        department: '',
        typeOfLeave: '',
        startDate: '',
        endDate: '',
        carNumber: '',
        insuranceCompany: '',
        premium: '',
        grossPremium: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error saving employee details:', error);
      alert('Failed to save employee details');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value
    });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '60px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'none',
    height: '100px',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Submit Employee Details</h2>
        <input
          type="text"
          name="employeeId"
          value={employeeData.employeeId}
          onChange={handleInputChange}
          placeholder="Employee ID"
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="insuranceType"
          value={employeeData.insuranceType}
          onChange={handleInputChange}
          placeholder="Insurance Type"
          style={inputStyle}
        />
        <input
          type="text"
          name="department"
          value={employeeData.department}
          onChange={handleInputChange}
          placeholder="Department"
          style={inputStyle}
        />
        <input
          type="text"
          name="typeOfLeave"
          value={employeeData.typeOfLeave}
          onChange={handleInputChange}
          placeholder="Type of Leave"
          style={inputStyle}
        />
        <input
          type="date"
          name="startDate"
          value={employeeData.startDate}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input
          type="date"
          name="endDate"
          value={employeeData.endDate}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="carNumber"
          value={employeeData.carNumber}
          onChange={handleInputChange}
          placeholder="Car Number"
          style={inputStyle}
        />
        <input
          type="text"
          name="insuranceCompany"
          value={employeeData.insuranceCompany}
          onChange={handleInputChange}
          placeholder="Insurance Company"
          style={inputStyle}
        />
        <input
          type="text"
          name="premium"
          value={employeeData.premium}
          onChange={handleInputChange}
          placeholder="Premium"
          style={inputStyle}
        />
        <input
          type="text"
          name="grossPremium"
          value={employeeData.grossPremium}
          onChange={handleInputChange}
          placeholder="Gross Premium"
          style={inputStyle}
        />
        <textarea
          name="reason"
          value={employeeData.reason}
          onChange={handleInputChange}
          placeholder="Reason (optional)"
          style={textareaStyle}
        ></textarea>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
