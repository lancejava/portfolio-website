import React from 'react'

export const About = () => 
{
    return (
        <div name='about' className='w-full h-screen bg-[#0F0E11] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8 justify-center'>
                    <div className='pb-8 pl-4 text-center'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#2B2D35]'>
                            About
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi. I'm Lance, nice to meet you. Please take a look around.</p>
                    </div>  
                    <div>
                        <p>
                        I love building software that makes a positive impact on people's lives. My focus is on creating software for individuals and small businesses. I enjoy exploring new technologies and working with people from diverse backgrounds.
                        </p>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default About