import React from "react";

const About = () => {
  return (
    <div name="about"  className="w-full  bg-gradient-to-b  from-black
    via-black to-red-800
    text-white sm:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20 sm:pt-0">
       <p className="text-4xl font-bold inline border-b-4 border-gray-500 "> About</p>
        </div>
        <p className="text-xl text-justify mt-10 px-10 ">
          Hi there, I'm Abhishek a full stack developer post graduated from 
          Banaras Hindu University, Varanasi(India) in 2022 with 8.1 cgpa.From 
          the moment i produced "Hello World" in the console of my first 
          application, I knew i was hooked into the world of software development.
          But software development has never been a "just skill for job" for me.
          It offered me an engaging challenge to continuously learning and improving
           my skills.what started with a "Hello world" has become a full-fledged passion
          that only gets more exciting as time goes by. 
        </p>
        <br />
        <p className="text-xl text-justify px-10">
          Now enjoying building web application and web-sites. learning new concepts and 
          sharpening my skills day by day in web development. Always curious to learn new 
          technolgies, it kind of fun playing with components and building a interactive user
           interface. I also have a deep interest in backend technology. So, i'm also learing 
           it and growing as a full-stack Developer.   
          
        </p>
      </div>
    </div>
  );
};

export default About;
