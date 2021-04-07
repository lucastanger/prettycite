import React, { useState } from "react";

export default function Nav() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className="flex flex-wrap flex-row justify-between space-x-4 bg-gray-100 px-6 md:space-x-4 relative">
            <a href="" className="block uppercase py-6">
                prettycite
            </a>
            <button onClick={handleToggle} className="inline-block md:hidden w-8 h-8 rounded-lg text-gray-600 my-5 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <nav className={`uppercase md:relative md:flex flex-col md:flex-row md:space-x-5 md:items-center font-semibold text-sm w-full md:w-auto space-y-3 md:space-y-0 bg-gray-100 md:bg-transparent ${!isActive ? "" : "hidden"}`}>
                <a href="#" className="block text-indigo-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">Home</a>
                <a href="#" className="block text-gray-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">Let's begin</a>
                <a href="#" className="block text-gray-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">About</a>
                <a href="#" className="block text-gray-600 p-4 rounded-lg hover:bg-gray-300 hover:text-indigo-800">Contact me</a>
            </nav>
        </header>

    )
}