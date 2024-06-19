import { useState } from "react"
import { userSignup } from "../../apis/auth.js";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role, setRole] = useState("Teacher");

    const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"))

    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
       await userSignup ({name,email,password,role});
            
        navigate("/login");
    };

    if(isAuthenticated){
       return <Navigate to="/" />;
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Register</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                             type="text"
                             className="form-control"
                             id="name"
                             placeholder="Enter your name"
                             value={name}
                             onChange={(e) => setName(e.target.value)}
                             required
                             />
                            </div>
                           <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                             type="text"
                             className="form-control"
                             id="email"
                             placeholder="Enter your email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             required
                             />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                             type="password"
                             className="form-control"
                             id="password"
                             placeholder="Enter your password"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             required
                             />
                            </div>
                            <div className="form-group">
                                <label htmlFor="roles">Roles</label>
                                <select 
                                className="form-control"
                                id="roles"
                                value={role}
                                onChange={handleRoleChange}
                                required
                                >
                                  <option value="Teacher">Teacher</option>
                                  <option value="Student">Student</option> 
                                  <option value="Admin">Admin</option>
                            </select>   
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Register
                            </button>
                          </form>
                          <Link to="/login">Go to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export  default Register;