import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, SignUp } = useContext(AuthContext);
    const [mode, setMode] = useState("signup");
    const[error,setError]=useState(null);
    const navigate = useNavigate();

   function onlogin(data) {
    let result="";
    setError(null);
    if (mode==="signup") {
         result = SignUp(data.email, data.password);
        
    }
    else{
         result = login(data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    }else{
        setError(result.error)
    } 
}

    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    
                    <h1 className="page-title">
                        {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form onSubmit={handleSubmit(onlogin)} className="auth-form">
                    {error && <div className="error-message">{error}</div>}

                        <div className="form-group">
                            <label className="form-label">
                                Email
                            </label>
                            <input 
                                type="email" 
                                className="form-input" 
                                {...register("email", {
                                    required: "This Field Is Required",
                                    minLength: {
                                        value: 6,
                                        message: "Minimum 6 Chars"
                                    }
                                })}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                            
                            <label className="form-label">
                                Password
                            </label>
                            <input 
                                type="password" 
                                className="form-input" 
                                {...register("password", {
                                    required: "This Field Is Required",
                                    minLength: {
                                        value: 6,  
                                        message: "Minimum 6 Chars"
                                    }
                                })}
                            />
                            {errors.password && <span className="error-message">{errors.password.message}</span>}
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-large"> 
                            {mode === "signup" ? "Sign Up" : "Login"}
                        </button>
                    </form>
                    
                    <div className="auth-switch">
                        {mode === "signup" ? (
                            <p>
                                Already have an account?{" "}
                                <span className="auth-link" onClick={() => setMode("login")}>
                                    Login
                                </span>
                            </p>
                        ) : (
                            <p>
                                Don't have an account?{" "}
                                <span className="auth-link" onClick={() => setMode("signup")}>
                                    Sign Up
                                </span>
                            </p>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}