import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div className="w-full h-screen text-center">

            <div className="max-w-[1240px] h-full mx-auto flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-500"> Build Something Together</p>
                    <h1 className="">{`Hi, I'm`} <span className="text-[#5651e5]">Razu Ahmed Joy</span></h1>
                    <h2 className="">Jr. Full Stack Developer</h2>
                    <p />
                    <p className="py-4 text-gray-600 max-w-[70%]  m-auto">
                        {`Basically I am fond of working with technologies from my childhood.
                        I started backend development with Django and currently learning MERN STACK. My Major stack is MERN STACK. Sometimes I use Django for building rest API also.`}
                    </p>

                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">

                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn />

                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub />

                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />

                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsPersonLinesFill />

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Main;