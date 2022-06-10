import React from 'react';
import Image from 'next/image';

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <h2 className="py-4">What can I Do?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/html.png" alt="HTML" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>

                        </div>

                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/css.png" alt="CSS" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>

                        </div>

                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/javascript.png" alt="JS" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>

                        </div>

                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/tailwind.png" alt="HTML" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>

                        </div>

                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/firebase.png" alt="HTML" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Firebase</h3>
                            </div>

                        </div>

                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/shopify.png" alt="HTML" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Shopify</h3>
                            </div>

                        </div>

                    </div>
           
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/html.png" alt="HTML" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>

                        </div>

                    </div>
           
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/shopify.png" alt="HTML" width='64px' height='64px' />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Shopify</h3>
                            </div>

                        </div>

                    </div>
           
                </div>

            </div>

        </div>
    );
};

export default Skills;