import React from 'react';
import BuildingImage from '../assets/banner.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Home = () => {

    const [user, SetUser] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
    //   storedUser = JSON.parse(storedUser);
    let storedUser = JSON?.parse(localStorage?.getItem("user"));

      console.log("Stored User", storedUser);
      if(!storedUser?.data?.email){

        alert("Please log in first", JSON.stringify(storedUser));
        navigate("/auth")
      }
      else{
        SetUser(storedUser?.data);
      }
    }, [localStorage.getItem("user")]);

  return (
    <div className="bg-[#fde8cd] min-h-screen px-10 py-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Ⓜ️</div>
        <ul className="flex space-x-8 text-black font-medium">
          <li><a key={12} href="#" className="hover:underline">WORK</a></li>
          <li><a href="#" className="hover:underline">ABOUT</a></li>
          <li><a href="#" className="hover:underline">BLOG</a></li>
          <li><a href="#" className="hover:underline">CONTACT</a></li>
          <li><button className="hover:underline" onClick={() => {
        
            try{
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              navigate("/auth");
            } catch{
              alert("Something went wrong");
            }
          

          }}>logout</button></li>

        </ul>
      </nav>
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        <div>
          <h1  className="text-4xl md:text-5xl font-extrabold text-black">Hello!!!</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">We Are Creative</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Digital Agency.</h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-6 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition">
            SEND MESSAGE
          </button>
        </div>
        <div>
          <img 
            src={BuildingImage}
            alt="Building"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Work Showcase Section */}
      <div className="mt-20 text-3xl font-extrabold text-black">WORK SHOWCASE.</div>
    </div>
  );
};

export default Home;
