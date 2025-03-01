import React from "react";

export const Login = ({ toggleForm }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />
        <button className="w-full bg-green-600 text-white p-3 rounded-lg">Sign In</button>
      </div>
      <p className="mt-4 text-sm">
        <button className="text-green-600 font-bold" onClick={toggleForm}>Sign up here</button>
      </p>
    </div>
  );
};