"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EmployeeTable = () => {
  const router = useRouter();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>All Employees</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} style={headerStyle}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId} style={rowStyle}>
              <td style={cellStyle}>{employee.employeeId}</td>
              <td style={cellStyle}>{employee.insuranceType}</td>
              <td style={cellStyle}>{employee.department}</td>
              <td style={cellStyle}>{employee.typeOfLeave}</td>
              <td style={cellStyle}>{new Date(employee.startDate).toLocaleDateString()}</td>
              <td style={cellStyle}>{new Date(employee.endDate).toLocaleDateString()}</td>
              <td style={cellStyle}>{employee.carNumber}</td>
              <td style={cellStyle}>{employee.insuranceCompany}</td>
              <td style={cellStyle}>{employee.premium}</td>
              <td style={cellStyle}>{employee.grossPremium}</td>
              <td style={cellStyle}>{employee.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Go Back Button */}
      <button onClick={() => router.back()} style={buttonStyle}>Go Back</button>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  maxWidth: '1500px',
  margin: '0 auto',
  padding: '60px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
  padding: '10px 0',
  backgroundColor: '#f0f0f0',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const rowStyle = {
  backgroundColor: '#fff',
  '&:nth-child(even)': {
    backgroundColor: '#f2f2f2',
  },
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '18px',
  textAlign: 'left',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '20px 0',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: '#fff',
  fontSize: '16px',
};

const tableHeaders = [
  'Employee ID',
  'Insurance Type',
  'Department',
  'Type of Leave',
  'Start Date',
  'End Date',
  'Car Number',
  'Insurance Company',
  'Premium',
  'Gross Premium',
  'Reason',
];

export default EmployeeTable;
