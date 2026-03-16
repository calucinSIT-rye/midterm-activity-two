const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to University Management System</h1>
      <p>Manage student registrations and view student details in our comprehensive system.</p>
      <div style={{ marginTop: '30px' }}>
        <h2>Features</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>📝 Student Registration</li>
          <li style={{ margin: '10px 0' }}>👥 Student Directory</li>
          <li style={{ margin: '10px 0' }}>📊 Student Details</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;