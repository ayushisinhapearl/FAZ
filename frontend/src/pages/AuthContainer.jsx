
import { useState, useEffect } from "react";

const AuthContainer = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-green-200 to-green-100 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-green-100 via-green-200 to-green-300 transition-transform duration-1000 ${
          isSignIn ? "translate-x-0" : "translate-x-full"
        } w-[300vw] md:w-[150vw] lg:w-[100vw] h-full rounded-bl-[50%] rounded-tr-[50%] lg:rounded-bl-[30%] lg:rounded-tr-[30%] shadow-lg`}
      ></div>

      <div className="relative w-full max-w-4xl flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-1000">
        <div
          className={`flex flex-col items-center justify-center w-full lg:w-1/2 p-8 transition-all duration-1000 ${
            isSignIn ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">Join with Us</h2>
          <div className="w-full space-y-4">
            <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
            <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-lg" />
            <button className="w-full bg-green-600 text-white p-3 rounded-lg">Sign Up</button>
          </div>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <button onClick={toggleForm} className="text-green-600 font-bold">
              Sign in here
            </button>
          </p>
        </div>

        {/* Sign In Section */}
        <div
          className={`flex flex-col items-center justify-center w-full lg:w-1/2 p-8 transition-all duration-1000 ${
            isSignIn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">User Login</h2>

          <div className="w-full space-y-4">
            <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
            <button className="w-full bg-green-600 text-white p-3 rounded-lg">Sign In</button>
          </div>
          <p className="mt-4 text-sm">Forgot password?</p>
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <button onClick={toggleForm} className="text-green-600 font-bold">
              Sign up here
            </button>
          </p>
        </div>
      </div>

      {/* Text & Image Content */}
      <div className="absolute w-full flex justify-between items-center px-8 md:px-16">
        {/* Welcome Text */}
        <div
          className={`transition-all duration-1000 ${
            isSignIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl text-customGreen font-bold">Welcome</h2>
        </div>
        {/* Join Us Text */}
        <div
          className={`transition-all duration-1000 ${
            isSignIn ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          {/* <h2 className="text-4xl md:text-5xl text-white font-bold">Join with Us</h2> */}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
