import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({title,backgroundImg,projectid}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image height={450} width={500} className="rounded-xl group-hover:opacity-10 ease-in transition-all duration-200" src={backgroundImg} alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-3 text-white text-center">React JS</p>
                <Link href={`/project/${projectid}`}>
                    <p className="text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-semibold text-md cursor-pointer">More Info</p>
                </Link>
            </div>
        </div>

    );
};

export default ProjectItem;