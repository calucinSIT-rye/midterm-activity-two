import { Link } from 'react-router-dom';

const StudentList = () => {
  // Mock student data
  const students = [
    { id: '1', name: 'John Doe', email: 'john@example.com', course: 'Computer Science' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', course: 'Mathematics' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', course: 'Physics' },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;