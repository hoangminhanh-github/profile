import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Bản thân</h2>
          <p className="py-2 text-gray-600">
            Sinh viên năm 3 tại đại học Thủy Lợi
          </p>
          <p className="my-2">Chuyên ngành Công nghệ thông tin</p>
          <p className="py-2 text-gray-600">
            Bắt đầu tập phát triển website từ năm 2020, bắt đầu với{" "}
            <span className="text-[#EB592A]">Html và Css </span>
            cơ bản.Tiếp tục với ngôn ngữ website phổ biến và mạnh mẽ nhất thời
            điểm hiện tại <span className="text-[#EB592A]">
              JavaScript
            </span>{" "}
            cùng với library được chống lưng bởi facebook{" "}
            <span className="text-[#EB592A]"> ReactJs</span>
          </p>
          <p className="py-2 text-gray-600">
            Hệ sinh thái của vô cùng mạnh mẽ của ReactJs giúp tôi tìm hiểu phát
            triển thêm phía Server side với{" "}
            <span className="text-[#EB592A]">NodeJs</span>.Học Nodejs giúp tôi
            có thể tương tác với phía clientSide thông qua API đồng thời sử lý
            tương tác dữ liệu người dùng và lưu trữ trong Database , với các
            database tôi đã sử dụng qua là{" "}
            <span className="text-[#EB592A]">Mongodb và Mysql</span>
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Một vài sản phẩm của tôi
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
