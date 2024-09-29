"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EmployeeForm = () => {
  const router = useRouter();
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

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Add Employee Details</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" name="employeeId" value={employeeData.employeeId} onChange={handleInputChange} placeholder="Employee ID" required style={inputStyle} />
        <input type="text" name="insuranceType" value={employeeData.insuranceType} onChange={handleInputChange} placeholder="Insurance Type" style={inputStyle} />
        <input type="text" name="department" value={employeeData.department} onChange={handleInputChange} placeholder="Department" style={inputStyle} />
        <input type="text" name="typeOfLeave" value={employeeData.typeOfLeave} onChange={handleInputChange} placeholder="Type of Leave" style={inputStyle} />
        <input type="date" name="startDate" value={employeeData.startDate} onChange={handleInputChange} style={inputStyle} />
        <input type="date" name="endDate" value={employeeData.endDate} onChange={handleInputChange} style={inputStyle} />
        <input type="text" name="carNumber" value={employeeData.carNumber} onChange={handleInputChange} placeholder="Car Number" style={inputStyle} />
        <input type="text" name="insuranceCompany" value={employeeData.insuranceCompany} onChange={handleInputChange} placeholder="Insurance Company" style={inputStyle} />
        <input type="text" name="premium" value={employeeData.premium} onChange={handleInputChange} placeholder="Premium" style={inputStyle} />
        <input type="text" name="grossPremium" value={employeeData.grossPremium} onChange={handleInputChange} placeholder="Gross Premium" style={inputStyle} />
        <textarea name="reason" value={employeeData.reason} onChange={handleInputChange} placeholder="Reason (optional)" style={textareaStyle}></textarea>
        <button type="submit" style={buttonStyle}>Submit</button>
        {/* Go Back Button */}
        <button type="button" onClick={() => router.back()} style={buttonStyle}>Go Back</button>
      </form>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
};

const textareaStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  resize: 'vertical', // Allow vertical resizing
};

const buttonStyle = {
  padding: '10px 20px',
  marginTop: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: '#fff',
  fontSize: '16px',
};

export default EmployeeForm;
