import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/student/1">Student 1</Link></li>
        <li><Link to="/student/2">Student 2</Link></li>
        <li><Link to="/student/3">Student 3</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;