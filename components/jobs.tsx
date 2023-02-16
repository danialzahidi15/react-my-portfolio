import React from "react";
import Image from "next/image";
import KestrlLogo from "../public/kestrl-logo.png";
import PanasonicLogo from "../public/panasonic-logo.png";
import KwangLiLogo from "../public/kwangli-logo.png";

function JobExperiences() {
  return (
    <div className="marginSection">
      <section className="">
        <h3>Experiences</h3>
        <div className="jobsSection">
          <div className="hidden relative md:flex item-center justify-center companyImage">
            <Image src={KestrlLogo} alt=""></Image>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold">
              Kestrl Tech Sdn Bhd |{" "}
              <span className="text-gray-400">Internship Frontend Developer</span>
            </h2>
            <p className="year">2022</p>
          </div>
        </div>
        <div className="jobsSection">
          <div className="hidden relative md:flex item-center justify-center companyImage">
            <Image src={PanasonicLogo} alt="" fill style={{objectFit: 'contain'}}></Image>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold">
              Panasonic System Network Malaysia Sdn Bhd |{" "}
              <span className="text-gray-400">QA Engineer</span>
            </h2>
            <p className="year">2021 - 2022</p>
          </div>
        </div>
        <div className="jobsSection">
          <div className="hidden relative md:flex item-center justify-center companyImage">
          <Image src={KwangLiLogo} alt="" fill style={{objectFit: 'cover'}}></Image>
          </div>
          <div>
            <h2 className="text-gray-300 font-semibold">
              Kwang Li Industry Sdn Bhd |{" "}
              <span className="text-gray-400">
                Production Asisstant Engineer
              </span>
            </h2>
            <p className="year">2020-2021</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobExperiences;
