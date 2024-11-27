'use client';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full ">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-gray-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Burger Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        }  md:hidden absolute w-full left-0 py-4 shadow-lg`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          <li className="hover:text-gray-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#about">About</a>
          </li>
          
          <li className="hover:text-gray-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BurgerMenu;




