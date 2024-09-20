import React from 'react';

const StudentList = ({ students, deleteStudent, setCurrentStudent }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student._id}>
              <strong>{student.name}</strong> | {student.college} | {student.qualification} | {student.date} | {student.year}
              <button onClick={() => setCurrentStudent(student)}>Edit</button>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default StudentList;
