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
      <h1>Student Details</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h2>{student.name}</h2>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </div>
    </div>
  );
};

export default Student;