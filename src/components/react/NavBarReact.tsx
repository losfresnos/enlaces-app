import React, { useState } from 'react';

export const NavBar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full shadow  bg-black sticky">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 mt-5">               
                <div>               
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">       
                    <div className="flex items-center justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                            <title>
                                link
                            </title>
                            <g fill="#36c">
                                <path d="M4.83 15h2.91a4.88 4.88 0 0 1-1.55-2H5a3 3 0 1 1 0-6h3a3 3 0 0 1 2.82 4h2.1a4.82 4.82 0 0 0 .08-.83v-.34A4.83 4.83 0 0 0 8.17 5H4.83A4.83 4.83 0 0 0 0 9.83v.34A4.83 4.83 0 0 0 4.83 15z"/>
                                <path d="M15.17 5h-2.91a4.88 4.88 0 0 1 1.55 2H15a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.82-4h-2.1a4.82 4.82 0 0 0-.08.83v.34A4.83 4.83 0 0 0 11.83 15h3.34A4.83 4.83 0 0 0 20 10.17v-.34A4.83 4.83 0 0 0 15.17 5z"/>
                            </g>
                        </svg>
                    </div>
                    <div>
                    <a href="https://enlaces-app.pages.dev/">
                            <h2 className="text-3xl font-bold text-white ml-2">LINKS</h2>
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
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">About US</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                        </ul>                       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;