import React from "react";
import JIRA from "../assets/portfolio/JIRA.png";
import TeeRex from "../assets/portfolio/TeeRex.png";
import CHAT from "../assets/portfolio/CHAT.png";
import Admin from "../assets/portfolio/Admin.png";
import Camera from "../assets/portfolio/CameraApp.png";
import MiStore from "../assets/portfolio/MIStore.png";
const Portfolio = () => {
    const works=[
        {
            id:1,
            src:JIRA,
            linkDemo:"https://abhisheksaini129.github.io/jira_ticket_manager/",
            linkCode:"https://github.com/abhisheksaini129/jira_ticket_manager",
        },
        {
            id:2,
            src:Admin,
            linkDemo:"https://admin-panel-abhishek.netlify.app/",
            linkCode:"https://github.com/abhisheksaini129/admin-page",
        },
        {
            id:3,
            src:Camera,
            linkDemo:"https://abhisheksaini129.github.io/webcam/",
            linkCode:"https://github.com/abhisheksaini129/webcam",
        },
        {
            id:4,
            src:MiStore,
            linkDemo:"https://xiaomi-store-clone.netlify.app/",
            linkCode:"https://github.com/abhisheksaini129/mi-store-clone",
        },
        {
            id:5,
            src:TeeRex,
            linkDemo:"https://teerex-e-store.netlify.app/",
            linkCode:"https://github.com/abhisheksaini129/Teerex-Store",
        },
        {
            id:6,
            src:CHAT,
            linkDemo:"https://bhuconnect.netlify.app/",
            linkCode:"https://github.com/abhisheksaini129/chatApplication",
        },
    ]
  return (
    <div name="portfolio"
      className=" bg-gradient-to-b  from-black
      via-black to-red-800 w-full 
    text-white ">
      <div
        className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full sm:pt-20">
        <div className="pb-8 pt-20 ">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
          <p className="py-6">Check out some of my work, right here</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-20 ">
        {
            works.map(({id,src,linkDemo,linkCode})=>(
          <div key={id} className="shadow-md shadow-white rounded-lg">
            <img className="rounded-md duration-200 hover:scale-105" src={src} alt="" srcset="" />
            <div className="flex items-center justify-center"> 
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer" href={linkDemo}>Demo</a>
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 " target="_blank" rel="noreferrer" href={linkCode}>Code</a>
            </div>
          </div>
           )) 
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
