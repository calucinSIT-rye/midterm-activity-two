import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#003366', padding: '10px 0', marginBottom: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ color: 'white', margin: '0 0 10px 0' }}>University Management System</h2>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
          <li><Link to="/home" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
          <li><Link to="/register" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link></li>
          <li><Link to="/student/1" style={{ color: 'white', textDecoration: 'none' }}>Student 1</Link></li>
          <li><Link to="/student/2" style={{ color: 'white', textDecoration: 'none' }}>Student 2</Link></li>
          <li><Link to="/student/3" style={{ color: 'white', textDecoration: 'none' }}>Student 3</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;