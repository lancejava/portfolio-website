
import Logo from '../assets/logo.png';
import React, {useState} from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill, BsFillGeoFill, BsFillTelephoneFill} from 'react-icons/bs';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {Link} from 'react-scroll'

function Footer() {
  return (
    <footer className="text-white py-4 bg-[#0F0E11] ">
      <div className="w-full container mx-auto md:flex items-start justify-between px-4">
        <div className='py-2 flex flex-col px-4 justify-center items-center'>
          <p className='text-center font-bold'>Location</p>
          <div className='flex flex-row '>
            <a className='flex justify-between items-center w-full text-gray-300'>      
              <BsFillGeoFill className="mr" size={25} />
              <span className="px-2 pt-3">Chesapeake, VA</span>
            </a>
          </div>
        </div>
        <div className='flex py-2 flex-col px-4 justify-center items-center'>
          <p className=' text-center font-bold'>Contact me</p>
          <div className='flex flex-row '>
            <a className='flex mx-2 justify-between items-center w-full text-gray-300' href="https://mail.google.com/mail/u/0/#inbox">
              <HiOutlineMail className="mr" size={30} />
              <span className="px-2">lancejavaluyas@gmail.com</span>
            </a>
            <a className='flex mx-2 items-center py-2 justify-start w-full text-gray-300' href="tel:+17572970714">
              <BsFillTelephoneFill className="mr" size={25} />
              <span className="px-2">(757) 297-0714</span>
            </a>
          </div>
        </div>
        <div className='flex py-2 pt-6 flex-col px-4 justify-center items-center'>
          <ul className=' flex flex-row'>
            <li className='flex items-center' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/lancejavaluyas/">
                    <FaLinkedin size={30} />
                </a>
            </li>
            <li className='flex items-center' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://github.com/lancejava">
                    <FaGithub size={30} />
                </a>
            </li>
            <li className='flex items-center' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://mail.google.com/mail/u/0/#inbox">
                   <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='flex items-center' >
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/lancejavaluyas/details/featured/">
                    <BsFillPersonLinesFill size={30} />
                </a>
            </li>
          </ul>

        </div>
       
      </div>
    </footer>
  );
}

export default Footer;