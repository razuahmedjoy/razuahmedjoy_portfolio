import React from 'react';

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 justify-center items-center content-center">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores!
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum animi iure quod odio modi exercitationem ad placeat debitis, natus est voluptatem laboriosam cupiditate accusamus numquam officia voluptatum doloremque libero excepturi sint aliquid sapiente distinctio? Tempora culpa illum iste ullam hic.
                    </p>
                    <p className="py-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla molestias libero nesciunt iusto iure maiores excepturi blanditiis ducimus sit ullam.</p>
                </div>
                <div className="w-full h-auto m-auto flex justify-center">
                   
                        <img className="object-cover rounded-full p-2 shadow-md text-center" src="https://razuahmedjoy.com/assets/images/user.jpg" alt="user" />
                    
                </div>
            </div>
        </div>
    );
};

export default About;