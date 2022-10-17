import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";

import ProjectItem from "./ProjectItem";
const Project = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p>PROJECTS</p>
        <p>What Ive Built</p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem projectImage={propertyImg} projectUrl="/"></ProjectItem>
          <ProjectItem projectImage={netflixImg} projectUrl="/"></ProjectItem>
          <ProjectItem projectImage={cryptoImg} projectUrl="/"></ProjectItem>
          <ProjectItem projectImage={twitchImg} projectUrl="/"></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Project;
