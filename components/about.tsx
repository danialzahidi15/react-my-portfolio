import React, { useEffect, useState } from "react";
import createClient from "../pages/client";

function About() {
  const [detailData, setDetail] = useState<any[]>([]);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "detail"]{
      greeting,
      title,
      firstParagraph,
      secondParagraph,
    }`
      )
      .then((data) => setDetail(data))
      .catch(console.error);
  }, []);

  return (
    <div className="marginSection">
      {detailData &&
        detailData.map((detail) => (
          <section className="">
            <h3 className="text-gray-400 my-5">About</h3>
            <h2 className="text-white font-semibold">{detail.greeting}</h2>
            <p className="text-white my-2">{detail.title}</p>
            <p className="text">{detail.firstParagraph}</p>
            <p className="text border-b-2 pb-5 border-gray-800">
              {detail.secondParagraph}
            </p>
          </section>
        ))}
    </div>
  );
}

export default About;
