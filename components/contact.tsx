import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <div className="marginSection">
      <section className="flex justify-between">
        <div className="flex items-center gap-2 px-2 bg-gray-800 rounded-lg">
          <AiFillPhone style={{ color: "gray", fontSize: "base" }} />
          <p className="text-gray-400 text-sm">011-14573119</p>
        </div>
        <div className="flex items-center gap-2 px-2 bg-gray-800 rounded-lg">
          <MdEmail style={{ color: "gray", fontSize: "base" }} />
          <p className="text-gray-400 text-sm">danialzahidi15@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 px-2 bg-gray-800 rounded-lg">
          <MdLocationOn style={{ color: "gray", fontSize: "base" }} />
          <p className="text-gray-400 text-sm">Ayer Baloi, Johor</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
