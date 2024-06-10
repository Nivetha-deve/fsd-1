
import { useState } from 'react'
import './App.css'
import getAllStus from './apis';
import { useEffect } from 'react';
import StudentList from './StudentList';

function App() {

  const [students,setStudent] = useState([]);

  const loadData = async () => {
    const data = await getAllStus();

    setStudent(data);
  }

  useEffect(() => {
 loadData();
  }, []);

  return (
    <>
      <StudentList students={students} />
    </>
  
  )
}

export default App
