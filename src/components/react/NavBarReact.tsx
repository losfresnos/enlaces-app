import React, { useState } from 'react';

export const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
   
    if (typeof window !== 'undefined') {
        const navBar = document.getElementById("navBar");							
        navBar?.addEventListener("select:enviroment", function (e) {
            alert(this.className);   		
        });
    }

    return (
        <nav id="navBar" className="w-full shadow  bg-black sticky">
            <div className="justify-between px-4 mx-auto lg:max-w-auto md:items-center md:flex md:px-8 mt-5">               
                <div className='align-top'>               
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">       
                        <div className="flex items-center justify-between">
                           
                            <div>
                                <a href="https://enlaces-app.pages.dev/">
                                    <h2 className="text-xl font-bold text-transparent bg-clip-text ml-2 bg-gradient-to-r from-cyan-500 to-purple-500">LINKS & DOCS</h2>
                                </a>  
                            </div>
                        </div>               
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='align-top'>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-xl font-bold text-white hover:text-purple-500 hover:-translate-y-0.5">
                                <a className="p-2 group" href="/">Home
                                <div className="bg-purple-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                                </a>
                            </li>
                            <li className="text-xl font-bold text-white hover:text-purple-500 hover:-translate-y-0.5">
                                <a className="p-2 group" href="/categorias">Links
                                <div className="bg-purple-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                                </a>
                            </li>
                            <li className="text-xl font-bold text-white hover:text-purple-500 hover:-translate-y-0.5">
                                <a className="p-2 group" href="/docs">Docs
                                <div className="bg-purple-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>                               
                                </a>
                            </li>
                            <li className="text-xl font-bold text-white hover:text-purple-500 hover:-translate-y-0.5">
                                <a className="p-2 group" href="/contact">Contact US
                                    <div className="bg-purple-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                                </a>
                            </li>
                           
                        </ul>                       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;