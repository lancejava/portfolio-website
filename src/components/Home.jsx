import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

export const Home = () => 
{
    return (
        <div name='home' className='w-full h-screen px-4 bg-[#0F0E11]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
                <p className='text-[#8892b0] text-3xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lance Javaluyas</h1>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Front-End  Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w[700px]'>I am proficient in front-end development, with a particular emphasis on creating visually appealing and highly functional websites.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#46484F] hover:border-[#46484F]'>
                        <Link to ="work" smooth={true} duration={500}>View Work</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home