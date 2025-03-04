import { useState, useEffect } from "react";
import axios from "axios";
import BgLogin from "../assets/bg-login.png";
import BgSignup from "../assets/signup.png";
import {useNavigate} from "react-router-dom";

const AuthContainer = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [user, SetUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if(storedUser){
      // SetUser(JSON.parse(storedUser));
      navigate("/")
    }
    // setTimeout(() => {
    //   setIsSignIn(true);
    // }, 200);
  }, []);

  const toggleForm = () => setIsSignIn((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = localStorage.getItem("user");
    if(existingUser){
      alert("User already logged in");
      navigate("/");
      return;
    }

    
    try {
      const endpoint = isSignIn ? "Login" : "Signup";
      const response = await axios.post(`http://localhost:3000/api/${endpoint}`, formData, { withCredentials: true });

      alert(response.data.message);
      if (isSignIn ) {
        console.log("User logged in:", response.data);

        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.token);

        // SetUser(response.data);
        navigate("/");
      }

      
    } catch (error) {
      // alert(error.response?.data?.message || "Something went wrong");
       alert(error || "Something went wrong");
      
    }
  };

  

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-green-200 to-green-100 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-green-100 via-green-200 to-green-300 transition-transform duration-1000 ${
          isSignIn ? "translate-x-0" : "translate-x-full"
        } w-[300vw] md:w-[150vw] lg:w-[100vw] h-full rounded-bl-[50%] rounded-tr-[50%] lg:rounded-bl-[30%] lg:rounded-tr-[30%] shadow-lg`}
      ></div>

      <div
        className="relative w-full max-w-4xl flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-1000"
        style={{ backgroundImage: `url(${isSignIn ? BgLogin : BgSignup})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Signup Form */}
        <div
          className={`flex flex-col items-center justify-center w-full lg:w-1/2 p-8 transition-all duration-1000 ${
            isSignIn ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">Join with Us</h2>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input type="text" name="name" placeholder="Username" className="w-full p-3 border rounded-lg" onChange={handleChange} required={!isSignIn} />
            <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            {!isSignIn && (
              <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            )}
            <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg">Sign Up</button>
          </form>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <button onClick={toggleForm} className="text-green-600 font-bold">
              Sign in here
            </button>
          </p>
        </div>

        {/* Login Form */}
        <div
          className={`flex flex-col items-center justify-center w-full lg:w-1/2 p-8 transition-all duration-1000 ${
            isSignIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">User Login</h2>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg">Sign In</button>
          </form>
          <p className="mt-4 text-sm">Forgot password?</p>
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <button onClick={toggleForm} className="text-green-600 font-bold">
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default AuthContainer;


