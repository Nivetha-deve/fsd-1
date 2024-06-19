import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute";
import StudentListApp from "./Students/App.jsx";
import TeacherList from "./Teachers/App.jsx"
import Login from "./login/Login.jsx";
import Register from "./register/Register.jsx";
import Home from "./home/Home.jsx";
import VerifyAccount from "./verify-account/VerifyAccount.jsx";

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProtectedRoute component= {<Home />} />} />
        <Route path="/teachers" element={<ProtectedRoute component = {<TeacherList />} />} />
        <Route path="/students" element={<ProtectedRoute component= {<StudentListApp />} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;  