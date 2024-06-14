import { useState } from 'react'
import { getAllStus } from '../../apis/students';
import { useEffect } from 'react';
import {StudentListApp} from "./Students/StudentListApp"

function App() {
  const [students,setStudents] = useState([]);

  const loadData = async () => {
    const data = await getAllStus();
    // console.log('Fetched students:', data); 
    setStudents(data);
  }

  useEffect(() => {
 loadData();
  }, []);

  return (
    <>
      <StudentListApp students={students} />
    </>
  
  )
}

export default App
