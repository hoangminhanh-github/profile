import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import userManage from "../public/assets/projects/userManage.png";
import pwg from "../public/assets/projects/pwg.png";
import recipe from "../public/assets/projects/recipe.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Users"
            backgroundImg={userManage}
            projectUrl="/product/userManage"
            tech="ReactJS Nodejs"
          />
          <ProjectItem
            title="Admin manager"
            backgroundImg={pwg}
            projectUrl="/product/pwg"
            tech="ReactJS TypeScript"
          />
          <ProjectItem
            title="Preview Recipe"
            backgroundImg={recipe}
            projectUrl="/product/recipe"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
