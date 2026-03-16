import React from 'react';
import { useForm } from 'react-hook-form';

const StudentForm = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const onSubmit = (data) => {
    alert('Form submitted successfully! Data: ' + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
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
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          {...register('course', { required: 'Course is required' })}
        />
        {errors.course && <p style={{ color: 'red' }}>{errors.course.message}</p>}
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default StudentForm;