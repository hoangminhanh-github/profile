import Image from "next/image";
import React from "react";
Image;
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="p-2 text-gray-600">I am not your normal developer</p>
          <p className="p-2 text-gray-600">
            I am not your normal developerI am not your normal developerI am not
            your normal developerI am not your normal developerI am not your
            normal developerI am not your normal developerI am not your normal
            developerI am not your normal developerI am not your normal
            developerI am not your normal developerI am not your normal
            developerI am not your normal developerI am not your normal
            developer
          </p>
          <p className="p-2 text-gray-600">
            I am not your normal developerI am not your normal developerI am not
            your normal developerI am not your normal developerI am not your
            normal developerI am not your normal developerI am not your normal
            developerI am not your normal developerI am not your normal
            developerI am not your normal developerI am not your normal
            developerI am not your normal developerI am not your normal
            developer
          </p>
        </div>
        <div className="w-full h-auto shadow-xl p-4 shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="object-cover "
            src="/../public/assets/about.jpg"
            width="1000"
            height="1000"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
