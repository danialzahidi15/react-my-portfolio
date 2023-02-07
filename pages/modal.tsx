import React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import JobExperiences from "../components/jobs";
import MyReferences from "../components/references";
import Repositories from "../components/repositoriy";
import Skills from "../components/skills";

function Modal() {
  return (
    <div className="h-screen w-full fixed top-0 left-0 items-center justify-center bg-black bg-opacity-70 overflow-auto hidden">
      <div className="bg-gray-900 w-[95%] md:w-[60%] mx-auto">
        <Header />
        <Contact />
        <About />
        <Skills />
        <JobExperiences />
        <Repositories />
        <MyReferences />
      </div>
    </div>
  );
}

export default Modal;
