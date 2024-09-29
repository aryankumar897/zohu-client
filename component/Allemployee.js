"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeTable = () => {
  const [allEmployees, setAllEmployees] = useState([]);

  // Fetch all employee data
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/employees');
        setAllEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
      <h2 style={{ textAlign: 'center' }}>Employee Data</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Employee ID</th>
            <th style={thStyle}>Insurance Type</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Type of Leave</th>
            <th style={thStyle}>Start Date</th>
            <th style={thStyle}>End Date</th>
            <th style={thStyle}>Car Number</th>
            <th style={thStyle}>Insurance Company</th>
            <th style={thStyle}>Premium</th>
            <th style={thStyle}>Gross Premium</th>
            <th style={thStyle}>Reason</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((employee) => (
            <tr key={employee.employeeId}>
              <td style={tdStyle}>{employee.employeeId}</td>
              <td style={tdStyle}>{employee.insuranceType || 'Not found'}</td>
              <td style={tdStyle}>{employee.department || 'Not found'}</td>
              <td style={tdStyle}>{employee.typeOfLeave || 'Not found'}</td>
              <td style={tdStyle}>{employee.startDate || 'Not found'}</td>
              <td style={tdStyle}>{employee.endDate || 'Not found'}</td>
              <td style={tdStyle}>{employee.carNumber || 'Not found'}</td>
              <td style={tdStyle}>{employee.insuranceCompany || 'Not found'}</td>
              <td style={tdStyle}>{employee.premium || 'Not found'}</td>
              <td style={tdStyle}>{employee.grossPremium || 'Not found'}</td>
              <td style={tdStyle}>{employee.reason || 'Not found'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
