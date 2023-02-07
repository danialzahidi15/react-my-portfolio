import React from "react";
import Image from "next/image";
import htmlLogo from '../public/html-logo.png';
import cssLogo from '../public/css-logo.png';
import jsLogo from '../public/javascript-logo.png';
import reactLogo from '../public/react-logo.png';
import flutterLogo from '../public/flutter-logo.png';

function Skills() {
  return (
    <div className="marginSection">
      <h3>Programming Language</h3>
      <section className="">
        <div className="flex flex-wrap gap-3">
          <div className="codeArea">
            <div className="codeImage">
              <Image src={htmlLogo} alt="" fill style={{objectFit: 'cover'}}></Image>
            </div>
            <h4>
              HTML <span className="text-gray-400">Good</span>
            </h4>
          </div>
          <div className="codeArea">
            <div className="codeImage">
              <Image src={cssLogo} alt="" fill style={{objectFit: 'cover'}}></Image>
            </div>
            <h4>
              CSS <span className="text-gray-400">Good</span>
            </h4>
          </div>
          <div className="codeArea">
            <div className="codeImage">
              <Image src={jsLogo} alt="" fill style={{objectFit: 'cover'}}></Image>
            </div>
            <h4>
              JavaScript <span className="text-gray-400">Good</span>
            </h4>
          </div>
          <div className="codeArea">
            <div className="codeImage">
              <Image src={reactLogo} alt="" fill style={{objectFit: 'cover'}}></Image>
            </div>
            <h4>React</h4>
          </div>
          <div className="codeArea">
            <div className="codeImage">
              <Image src={flutterLogo} alt="" fill style={{objectFit: 'cover'}}></Image>
            </div>
            <h4>Flutter</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
