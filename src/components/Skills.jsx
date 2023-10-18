import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import GitGub from '../assets/github.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline border-b-4 border-[#600000]'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
        
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {HTML} alt="HTML icon"/>
                    <p className='my-3'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {CSS} alt="CSS icon"/>
                    <p className='my-3'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {JavaScript} alt="JavaScript icon"/>
                    <p className='my-3'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {ReactImg} alt="React icon"/>
                    <p className='my-3'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {Java} alt="Java icon"/>
                    <p className='my-3'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {Python} alt="Python icon"/>
                    <p className='my-3'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {Node} alt="Node icon"/>
                    <p className='my-3'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4'src = {Tailwind} alt="Tailwind icon"/>
                    <p className='my-3'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Skills