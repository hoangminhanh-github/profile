import React from "react";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const Main = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let build something exciting
          </p>
          <h1 className="py-4 text-gray-700">
            {/*  eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm <span className="text-[#5651e5]">Hoàng Anh</span>
          </h1>
          <h1 className="py-2 text-gray-700">Intern Website Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Tự học phát triển Website 2020 đến hiên tại Mong muốn được tiếp xúc
            với môi trường làm việc thực tế chuyên nghiệp Tinh thần thái độ mong
            muốn làm việc,học hỏi,phát triển bản thân
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              title="Github"
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <AiFillGithub></AiFillGithub>
            </div>
            <div
              title="facebook"
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <BsFacebook></BsFacebook>
            </div>
            <div
              title="Email"
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <FiMail></FiMail>
            </div>
            <div
              title="My Phone"
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <AiFillPhone></AiFillPhone>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
