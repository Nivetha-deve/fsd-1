import { useState } from 'react'
import { getAllTeachers } from '../../apis/teachers';
import { useEffect } from 'react';
import TeacherList from "./TeacherList";
import { Link } from 'react-router-dom';
import  {jwtDecode}  from 'jwt-decode';

function App() {

  const [teachers,setTeachers] = useState([]);

  const token  = localStorage.getItem("token");

const userDetails = jwtDecode(token);

//console.log("user_details",userDetails)

  const isAuthorized = userDetails.role === "Teacher";

  const loadData = async () => {
    const data = await getAllTeachers();
    // console.log('Fetched teachers:', data); // Debug log
    setTeachers(data);
  };

  useEffect(() => {
    if(isAuthorized) {
 loadData();
    }
  }, []);

  const renderCheck = () => {
    if (isAuthorized){
      return <TeacherList teachers={teachers} />;
    } else {
      return<h1>Your Not Authorised</h1>
    }
  };

  return (
    <div>
     <Link to="/">Home</Link>
      {renderCheck()}
    </div>
  
  );
}

export default App;


