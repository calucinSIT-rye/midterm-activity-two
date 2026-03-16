import StudentForm from '../components/StudentForm';

const Register = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Student Registration</h1>
      <p>Please fill out the form below to register as a student.</p>
      <StudentForm />
    </div>
  );
};

export default Register;