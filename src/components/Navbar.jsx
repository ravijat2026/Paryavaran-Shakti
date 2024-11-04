import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", name: "home" },
    { id: 2, link: "vision", name: "Our Vision" },
    { id: 3, link: "events", name: "events" },
    { id: 4, link: "team", name: "team" },
    { id: 5, link: "blog", name: "blog" },
    { id: 6, link: "contact", name: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 sticky top-0 bg-gradient-to-tl from-[#addee9] to-[#6bd2d3] text-slate-800 z-50 shadow-sm shadow-slate-400">
      <div className="flex items-center gap-2 pl-0 md:pl-7">
        <img className="h-16 w-16 p-0" src={logo} alt="Paryavaran Shakti Logo" />
        <h2 className="text-2xl md:text-3xl font-semibold font-signature ml-1 mt-1">
          Paryavaran <br /> Shakti
        </h2>
      </div>

      <ul className="hidden w-[45%] gap-3 text-1.7xl md:flex">
        {links.map(({ id, link, name }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-lg font-semibold hover:scale-105 duration-200">
            <NavLink
              to={link}
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "bg-transparent border-b-4 border-[#0a9698] rounded-sm p-2 text-green-700 font-bold" : "text-gray-700"
                } hover:text-green-700`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex cursor-pointer flex-col justify-center items-center absolute top-0 right-0 w-3/5 h-screen bg-gradient-to-tl from-[#cedfe6] to-[#67c5c6] z-40">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
            >
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive ? "bg-transparent border-b-4 border-[#0a9698] rounded-sm p-2 text-green-700 font-bold" : "text-gray-700"
                  } hover:text-green-700`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
