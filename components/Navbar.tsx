import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
FiMail;
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          width="125"
          height="50"
          src="/../public/assets/navLogo.png"
          alt=""
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">Skill</li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25}></AiOutlineMenu>
          </div>
        </div>
      </div>
      {/* nav right */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            {/* nav right header */}
            <div className=" flex w-full items-center justify-between">
              <Image
                src="/../public/assets/navLogo.png"
                width="87"
                height="35"
                alt=""
              ></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/*nav right  slogan */}
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                lets build something legendary together
              </p>
            </div>
            {/* nav right content */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase ">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skill</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              {/* under */}
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFacebook></BsFacebook>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillPhone></AiFillPhone>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FiMail></FiMail>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillGithub></AiFillGithub>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
