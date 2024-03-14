import React from 'react'
import VA from '../assets/VILogo.png'
import Bebop from '../assets/Bebop.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0F0E11] w-full md:h-screen text-gray-300 py-200px'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#2B2D35]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-4'>
                <div 
                style={{backgroundImage: `url(${VA})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 justify-center items-center'>
                        <span className='text-2xl font-bold text-white text-center tracking-wider'>
                            Virtual Assistant
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://github.com/lancejava/Virtual-Assitant">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${Bebop})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 justify-center items-center'>
                        <span className='text-2xl font-bold text-white text-center tracking-wider'>
                            Bebop
                        </span>
                        <div className='pt-8'>
                            <a href="https://github.com/lancejava/discordmusicbot">
                                <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>               
        </div>
    </div> 
  )
}

export default Work