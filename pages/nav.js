import React, { useState } from "react";
import Link from 'next/link'

export default function Nav() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className="flex flex-wrap flex-row justify-between space-x-4 bg-gray-100 px-6 md:space-x-4 relative">
            <Link href="/">
                <a href="" className="block uppercase py-6">
                    prettycite
                </a>
            </Link>
            <button onClick={handleToggle} className={`md:hidden w-8 h-8 rounded-lg text-gray-600 my-5 focus:outline-none focus:ring-2 focus:ring-indigo-600 flex bg-transparent p-0 ${isActive ? "" : "opened"}`}>
                {/* <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg> */}
                <svg fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path fill-rule="evenodd" clip-rule="evenodd" className="line line2" d="M 20,50 H 80" />
                    <path fill-rule="evenodd" clip-rule="evenodd" className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>


            </button>
            <nav className={`uppercase md:relative md:flex flex-col md:flex-row md:space-x-5 md:items-center font-semibold text-sm w-full md:w-auto space-y-3 md:space-y-0 bg-gray-100 md:bg-transparent pb-3 md:pb-0 ${!isActive ? "" : "hidden "}`}>
                <Link href="/">
                    <a className="block text-indigo-600 p-4 rounded-lg hover:bg-indigo-600 hover:text-gray-300">Home</a>
                </Link>
                <Link href="/lets-begin">
                    <a className="block text-gray-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">Let's begin</a>
                </Link>
                <Link href="/about">
                    <a className="block text-gray-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">About</a>
                </Link>
                <Link href="/contact">
                    <a className="block text-gray-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">Contact me</a>
                </Link>
            </nav>
        </header>

    )
}