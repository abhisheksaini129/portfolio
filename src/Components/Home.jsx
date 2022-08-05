import React from "react";
import second from "../assets/heroImage.png";
import { FiChevronsRight } from "react-icons/fi";
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/portfolio");
  }
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
      via-black to-red-800"
    >
        <div className=" max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-20 md:pt-0">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hey, my name is Abhishek.I have done my Masters in Computer Application from Banaras Hindu University, Varanasi(India) in 2022. I'm passionate about creating interactive web-apps and websites. 
          </p>
          
          <div onClick={handleClick}
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md bg-gradient-to-l  to-gray-600"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FiChevronsRight size={25} className="ml-1"/>
              </span>
          </div>
        </div>
        <div>
          <img
            className="rounded-3xl   mx-auto mb-20 w-5/6 md:w-full sm:m-auto "
            src={second}
            alt="profileAbhishek"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
