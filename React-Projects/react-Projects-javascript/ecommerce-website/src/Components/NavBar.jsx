import { Link } from "react-router-dom"
import "../App.css"
import {  useAuth } from "../context/AuthContext";
export default function NavBar()
{
    const { user,logout } = useAuth();
    function handleLogout()
    {
        logout();
        alert("Logged Out Successfully ")
    }
    return(
        <nav className="navbar">
            <div className="navbar-container">
            <Link to={"/"} className="navbar-brand">Show Hub</Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                
{user && <Link to="/checkout" className="navbar-link">Cart</Link>}                  </div>
            <div className="navbar-auth">
            <div className="navbar-auth-links">
              {user? (
                        <>
                            <button onClick={handleLogout} className="btn" style={{ backgroundColor: "red" }}>
                                Logout
                            </button>
                            <span>Hi {user.email}</span>
                          </>  
                        ) : 
                        (
                            <Link to={"/auth"} className="btn btn-primary">Login</Link>
                        )}
                
            </div>
            </div>
            </div>
        </nav>
    )
}