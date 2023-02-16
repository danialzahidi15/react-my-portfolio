import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function MyReferences() {
  return (
    <div className="marginSection mb-10">
      <section className="">
        <h3>My References</h3>
        <section className="flex">
          <div className="py-2 border-r-2 pr-5 border-gray-500 w-1/2">
            <h2 className="text-gray-300 font-semibold">Irfan Radzi</h2>
            <h2 className="text-gray-400 font-medium">Chief Technology Officer</h2>
            <div className="flex gap-2 py-1">
              <AiFillPhone style={{ color: "gray", fontSize: "base" }} />
              <p className="text-gray-400 text-sm">016-7621234</p>
            </div>
            <div className="flex gap-2 py-1">
              <MdEmail style={{ color: "gray", fontSize: "base" }} />
              <p className="text-gray-400 text-sm">irfan@kestrl.io</p>
            </div>
          </div>
          <div className="py-2 px-5 border-gray-500">
            <h2 className="text-gray-300 font-semibold">Muhammad Akif Farhan</h2>
            <h2 className="text-gray-400 font-medium">Senior Frontend Developer</h2>
            <div className="flex gap-2 py-1">
              <AiFillPhone style={{ color: "gray", fontSize: "base" }} />
              <p className="text-gray-400 text-sm">016-7621234</p>
            </div>
            <div className="flex gap-2 py-1">
              <MdEmail style={{ color: "gray", fontSize: "base" }} />
              <p className="text-gray-400 text-sm">akif@kestrl.io</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default MyReferences;
