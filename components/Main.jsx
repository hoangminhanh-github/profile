import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Cùng nhau học hỏi phát triển
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Hoàng Anh</span>
          </h1>
          <h1 className="py-2 text-gray-700">Intern Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Ngày hôm qua là quá khứ , ngay lúc này là điểm bắt đầu tốt nhất ,
            ngày mai là một món quà.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              title="facebook"
              href="https://www.facebook.com/profile.php?id=100018373358704"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFacebook />
              </div>
            </a>
            <a
              title="github"
              href="https://github.com/hoangminhanh-github"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div
                title="contact me"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
