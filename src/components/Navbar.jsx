import Logo from '../assets/logo.png';
import React, {useState} from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {Link} from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className= 'fixed w-full h-[60px] flex justify-between items-center px-4 py-8 bg-[#0F0E11] text-gray-300' style={{zIndex:1}} > 
        <div className='px-4 flex flex-row justify-center items-center'>
            <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
            </Link>
            <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                <p className='px-4 font-bold text-lg'>lancejava.dev</p>
            </Link>
        </div>
        {/* menu */}

        <ul className='hidden md:flex items-center'>
            <li>
                <Link to ="home" smooth={true} duration={500} className="hover:underline">Home</Link>
            </li>
            <li>
                <Link to ="about" smooth={true} duration={500} className="hover:underline">About</Link>
            </li>
            <li>
                <Link to ="skills" smooth={true} duration={500} className="hover:underline">Skills</Link>
            </li>
            <li>
                <Link to ="work" smooth={true} duration={500} className="hover:underline">Work</Link>
            </li>
            <li>
                <Link to ="contact" smooth={true} duration={500} className="inline-block bg-[#2B2D35] py-2 px-4 rounded-md text-white hover:bg-[#46484F]">Contact</Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick}className= 'md:hidden z-10 '>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0F0E11] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:underline'><Link onClick={handleClick} to ="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl hover:underline'><Link onClick={handleClick} to ="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl hover:underline'><Link onClick={handleClick} to ="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl hover:underline'><Link onClick={handleClick} to ="work" smooth={true} duration={500}>Work</Link></li>
            <li className='inline-block bg-[#2B2D35] my-2 py-4 text-4xl rounded-md text-white hover:bg-[#46484F]'><Link onClick={handleClick} to ="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/*Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/lancejavaluyas/">
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://github.com/lancejava">
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B22222]' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://mail.google.com/mail/u/0/#inbox">
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/lancejavaluyas/details/featured/">
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar