import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full bg-gradient-to-b  from-black
    via-black to-red-800  text-white  '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className=' pb-8 pt-40 sm:pt-20 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
                <p className='py-6 '>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center pt-10 pb-10 md:pt-0 '>
                <form action="https://getform.io/f/199318c0-f68b-48db-84d2-1d112635e3a4" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="Name" placeholder='Enter your full name'
                     className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="Email" placeholder='Enter your email'
                     className='p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none'/>
                     <textarea placeholder='Enter your message...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' name="messgae" id="" cols="30" rows="10"></textarea>
                     <button className='text-white bg-gradient-to-l from-red-900  to-black px-6 py-3 my-8 mx-auto flex
                     items-center rounded-md hover:scale-105 duration-300'> Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;