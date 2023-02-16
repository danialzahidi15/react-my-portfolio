import React, { useState } from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/header";
import JobExperiences from "../components/jobs";
import MyReferences from "../components/references";
import Repositories from "../components/repositoriy";
import Skills from "../components/skills";

function Modal() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
        className="bg-blue-600 text-white rounded-full py-2 px-4 font-semibold"
      >
        Resume
      </button>
      {modal ?
      <div
        className="h-screen w-full fixed top-0 left-0 items-center justify-center bg-black bg-opacity-70 overflow-auto z-30"
      >
        <div className="bg-gray-900 w-[95%] lg:w-[60%] mx-auto">
          <Header />
          <Contact />
          <About />
          <Skills />
          <JobExperiences />
          <Repositories />
          <MyReferences />
        </div>
      </div>
       : null}
    </div>
  );
}

export default Modal;
