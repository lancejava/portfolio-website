import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0F0E11] flex justify-center items-center p-4'>
        <form method='POST'action='https://getform.io/f/03a74723-9bb0-4382-9932-cec321ddf88c' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#46484F]'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email at - lancejavaluyas@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2'type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2 ' name='message' placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#46484F] hover:border-[#46484F] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact