import React from 'react';

const Contact = () => {
    return (
        <div className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5451e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300" src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="contact" />



                            </div>
                            <div>
                                <h2 className="py-2">Name here</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;