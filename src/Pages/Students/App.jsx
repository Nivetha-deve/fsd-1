import { useState } from 'react';
import { getAllStus }  from '../../apis/students';
import { useEffect } from 'react';
import StudentListApp from "./StudentListApp";
import { Link } from 'react-router-dom';

function App() {
  const [students,setStudents] = useState([]);

  const loadData = async () => {
  const data = await getAllStus();
    // console.log('Fetched students:', data); 
    if (data instanceof Array){
    setStudents(data);
    }
  };

 useEffect(() => {
 loadData(); 
  }, []);

  return (
    <>
    <Link to="/">Home</Link>
      <StudentListApp students={students} />
    </>
  );
}

export default App;
