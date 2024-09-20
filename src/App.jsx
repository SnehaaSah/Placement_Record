import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './index.css';  // Import the CSS

function App() {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getdetails');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const addStudent = async (student) => {
    try {
      await axios.post('http://localhost:8081/addDetails', student);
      fetchStudents();
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const updateStudent = async ( updatedStudent) => {
    try {
      await axios.put(`http://localhost:8081/updatedetails`, updatedStudent);
      fetchStudents();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/deletedetails/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Placement Record</h1>
        <StudentForm
          addStudent={addStudent}
          currentStudent={currentStudent}
          updateStudent={updateStudent}
          setCurrentStudent={setCurrentStudent}
        />
        <StudentList
          students={students}
          deleteStudent={deleteStudent}
          setCurrentStudent={setCurrentStudent}
        />
      </div>
    </div>
  );
}

export default App;
