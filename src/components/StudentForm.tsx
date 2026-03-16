import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  course: string;
}

const StudentForm = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert('Form submitted successfully! Data: ' + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        {errors.name && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.name.message as string}</p>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Email format is invalid'
            }
          })}
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        {errors.email && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.email.message as string}</p>}
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="course" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Course:</label>
        <input
          type="text"
          id="course"
          {...register('course', { required: 'Course is required' })}
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        {errors.course && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.course.message as string}</p>}
      </div>
      <button
        type="submit"
        disabled={!isValid}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: isValid ? '#003366' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: isValid ? 'pointer' : 'not-allowed'
        }}
      >
        Register Student
      </button>
    </form>
  );
};

export default StudentForm;