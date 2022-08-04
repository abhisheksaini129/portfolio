import React from 'react'
import { FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
const SocalLinks = () => {
  const links=[
    {
      id:1,
      child:(
        <>
        LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href:'https://www.linkedin.com/in/abhishek-saini-740545154/',
      style:'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
        Github <FaGithub size={30}/>
        </>
      ),
      href:'https://github.com/abhisheksaini129',
      // style:'rounded-tr-md'
    },
    {
      id:3,
      child:(
        <>
        Twitter <FaTwitter size={30}/>
        </>
      ),
      href:'https://twitter.com/abhishekcoding',
      // style:'rounded-tr-md'
    },
    {
      id:4,
      child:(
        <>
        Mail <HiOutlineMail size={30}/>
        </>
      ),
      href:'mailto:abhisheksaini084@gmail.com',
      // style:'rounded-tr-md'
    },
    {
      id:5,
      child:(
        <>
        Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href:'https://drive.google.com/file/d/1EVNfjG3BDKGrnX8VDpsIBv0Y4YeeJZ7h/view?usp=sharing',
      style:'rounded-br-md'
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left=0 fixed'>
      <ul>
        {
          links.map(({id,child,href,style})=>(

        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 ${style}`}>
          <a className='flex justify-between items-center w-full text-white'target="_blank" rel="noreferrer"  href={href}>
          {child}
          </a>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SocalLinks;