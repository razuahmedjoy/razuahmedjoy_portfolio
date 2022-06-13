import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Skills = () => {
    const [skills,setSkills] = useState([])
    useEffect(()=>{
        fetch("skills.json")
        .then(res=>res.json())
        .then(data =>setSkills(data))
    },[])
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <h2 className="py-4">What can I Do?</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {
                        skills && 
                        skills.map(skill=>(
                            <div key={skill.id} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                    <div className="m-auto">
                                        <Image src={skill.image} alt={skill.title} width='64px' height='64px' />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h3>{skill.title}</h3>
                                    </div>
        
                                </div>
        
                            </div>
                      

                        ))
                    }
           
                </div>

            </div>

        </div>
    );
};

export default Skills;