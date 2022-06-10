import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow ,setShadow] = useState(false);

    useEffect(() => {
      const handleShadow = () => {
        if(window.scrollY>=90){
            setShadow(true);
        }else{
            setShadow(false);
        }
      }

      window.addEventListener("scroll",handleShadow);
    }, [])
    


    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className={ shadow ? `fixed w-full h-20 shadow-xl z-[999]` : `fixed w-full h-20 z-[999]`}>

            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white">
                <Link className="cursor-pointer" href="/">
                    <span className="cursor-pointer logo font-bold">Razu Ahmed Joy</span>
                </Link>

                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>

                    </ul>

                    <div onClick={handleNav} className="md:hidden cursor-pointer mr-3">

                        <AiOutlineMenu size={25} />

                    </div>
                </div>
            </div>


         
               
                <div className={ nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>

                    <div className={ nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500" : "fixed left-[-100%] top-0 ease-in duration-500"}>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <Link href="/">
                                    <span className="cursor-pointer logo font-bold">Razu Ahmed Joy</span>
                                </Link>
                            </div>
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3">
                                <AiOutlineClose className="cursor-pointer" size={25} />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90
                           %]"> Let`s Build Somthing Lengendary Together</p>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li className="py-4 text-sm">Home</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">About</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Skills</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Project</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm">Contact</li>
                                </Link>
                            </ul>

                            <div className="pt-40">

                                <p className="uppercase tracking-widest text-[#5651e5]"> Let`s Connect</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">

                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />

                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />

                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />

                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsPersonLinesFill />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
          
        </div>
    );
};

export default Navbar;