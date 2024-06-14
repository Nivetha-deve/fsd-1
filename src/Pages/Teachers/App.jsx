import { useState } from 'react'
import { getAllTeachers } from '../../apis/teachers';
import { useEffect } from 'react';
import TeacherList from './Teachers/TeacherList';

function App() {

  const [teachers,setTeachers] = useState([]);

  const loadData = async () => {
    const data = await getAllTeachers();
    // console.log('Fetched teachers:', data); // Debug log
    setTeachers(data);
  };

  useEffect(() => {
 loadData();
  }, []);

  return (
    <>
      <TeacherList teachers={teachers} />
    </>
  
  );
}

export default App;
