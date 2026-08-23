import { createContext, use, useContext, useState } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(()=>{
    const storedUser = localStorage.getItem("currentUser");
        return storedUser?{email:storedUser}:null
        
    });

    function SignUp(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const newUser = { email, password };
        if (users.find(u=>u.email===email)) {
            return {success:false,error:"email Is Alredy Exist"}
        }
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        
        setUser({email: email});
        localStorage.setItem("currentUser", email);
        return{success:true}

    }

    function login(email,password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
        const user=users.find(u=>u.email===email&& u.password===password)
        if (!user) {
       return {success:false,error:"Invaled email or password"}

        }
        setUser({email: email});
        localStorage.setItem("currentUser",email);
        return{success:true}
    }

    const logout = () => {
        setUser(null);
       localStorage.removeItem("currentUser");

    };

    return (
        <AuthContext.Provider value={{ login, SignUp, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth()
{
    const context=useContext(AuthContext);
    return context;
}