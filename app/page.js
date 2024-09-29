"use client";
import React from 'react';
import { useRouter } from 'next/navigation'

const App = () => {
  const router = useRouter();

  const navigateToForm = () => {
    router.push('/add-employee');
  };

  const navigateToTable = () => {
    router.push('/all-employees');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Employee Management</h1>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={navigateToForm} style={buttonStyle}>Add Employee</button>
        <button onClick={navigateToTable} style={buttonStyle}>View Employees</button>
      </div>
    </div>
  );
};

// Inline CSS for buttons
const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: '#fff',
  fontSize: '16px',
};

export default App;
