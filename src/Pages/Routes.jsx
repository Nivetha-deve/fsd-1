import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import StudentListApp from "./Students/StudentListApp.jsx";
import TeacherList from "./Teachers/TeacherList.jsx"
import Login from "./login/Login.jsx";
import Register from "./register/Register.jsx";


const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProtectedRoute component= {<h1>Home Page</h1>} />} />
         <Route path="/teachers" element={<ProtectedRoute component = {<TeacherList />} />} />
        <Route path="/students" element={<ProtectedRoute component= {<StudentListApp />} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;  