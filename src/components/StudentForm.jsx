import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, currentStudent, updateStudent, setCurrentStudent }) => {
  const [student, setStudent] = useState({id:'', name: '', college: '', qualification: '', date: '', year: '' });

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    } else {
      setStudent({id:'', name: '', college: '', qualification: '', date: '', year: '' });
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStudent) {
      updateStudent(  student);
    } else {
      addStudent(student);
    }
    setCurrentStudent(null);
    setStudent({id:'', name: '', college: '', qualification: '', date: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
         <input type="number" name="id" value={student.id} onChange={handleChange} placeholder="ID" required />
      <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="college" value={student.college} onChange={handleChange} placeholder="College" required />
      <input type="text" name="qualification" value={student.qualification} onChange={handleChange} placeholder="Qualification" required />
      <input type="date" name="date" value={student.date} onChange={handleChange} required />
      <input type="text" name="year" value={student.year} onChange={handleChange} placeholder="Year" required />
      <button type="submit">{currentStudent ? 'Update Student' : 'Add Student'}</button>
    </form>
  );
};

export default StudentForm;
