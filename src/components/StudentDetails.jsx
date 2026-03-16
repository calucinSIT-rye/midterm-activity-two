import React from 'react';
import { useParams } from 'react-router-dom';

const Student = () => {
  const { id } = useParams();

  // Mock student data
  const students = [
    { id: '1', name: 'John Doe', email: 'john@example.com', course: 'Computer Science' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', course: 'Mathematics' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', course: 'Physics' },
  ];

  const student = students.find(s => s.id === id);

  if (!student) {
    return (
      <div>
        <h1>Student Not Found</h1>
        <p>No student found with ID: {id}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Student Profile</h1>
      <div style={{ border: '2px solid #003366', padding: '20px', borderRadius: '10px', backgroundColor: '#f0f8ff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#003366', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold' }}>
            {student.name.charAt(0)}
          </div>
        </div>
        <h2 style={{ textAlign: 'center', color: '#003366' }}>{student.name}</h2>
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
          <p><strong>Student ID:</strong> {student.id}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.course}</p>
        </div>
      </div>
    </div>
  );
};

export default Student;