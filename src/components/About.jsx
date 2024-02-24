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
                                I am passionate about building excellent software that improves
                                the lives of those around me. I specialize in creating software 
                                for clients ranging from individuals and small-businesses all the
                                way to large enterprise corporations. What would you do if you had 
                                a software expert available at your fingertips?
                        </p>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default About