import React from "react";
import { GoRepo } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

function Repositories() {

    const ListRepo = [
        {
            title: 'admin dashboard',
            subtitle: 'EGATOR admin dashboard',
        }
    ]
  return (
    <div className="marginSection">
      <h3>Repositories</h3>
      <section className="grid grid-cols-2">
        <section className="repoList">
          <div className="flex items-center gap-2">
            <GoRepo className="text-white" />
            <h5><a href="#">admin-dashboard</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">EGATOR admin dashboard</p>
          <div className="flex items-center text-gray-400 py-7 gap-5">
            <div className="flex items-center gap-1">
                <div className="bg-purple-500 w-3 h-3 rounded-full"></div>
                <p className="text-xs">CSS</p>
            </div>
            <div className="iconRepo"><AiOutlineStar /><span className="text-xs">0</span></div>
            <div className="iconRepo"><BiGitRepoForked /><span className="text-xs">0</span></div>
          </div>
        </section>
        <section className="repoList">
          <div className="flex items-center gap-2">
            <GoRepo className="text-white" />
            <h5><a href="#">countdown-timer</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Florin Pop Countdown Timer</p>
          <div className="flex items-center text-gray-400 py-7 gap-5">
            <div className="flex items-center gap-1">
                <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                <p className="text-xs">JavaScript</p>
            </div>
            <div className="iconRepo"><AiOutlineStar /><span className="text-xs">0</span></div>
            <div className="iconRepo"><BiGitRepoForked /><span className="text-xs">0</span></div>
          </div>
        </section>
        <section className="repoList">
          <div className="flex items-center gap-2">
            <GoRepo className="text-white" />
            <h5><a href="#">flutter-calculator-app</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Flutter Calculator App</p>
          <div className="flex items-center text-gray-400 py-7 gap-5">
            <div className="flex items-center gap-1">
                <div className="bg-red-400 w-3 h-3 rounded-full"></div>
                <p className="text-xs">C++</p>
            </div>
            <div className="iconRepo"><AiOutlineStar /><span className="text-xs">0</span></div>
            <div className="iconRepo"><BiGitRepoForked /><span className="text-xs">0</span></div>
          </div>
        </section>
        <section className="repoList">
          <div className="flex items-center gap-2">
            <GoRepo className="text-white" />
            <h5><a href="#">quiz-app</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Florin Pop Quiz Pop</p>
          <div className="flex items-center text-gray-400 py-7 gap-5">
            <div className="iconRepo"><AiOutlineStar /><span className="text-xs">0</span></div>
            <div className="iconRepo"><BiGitRepoForked /><span className="text-xs">0</span></div>
          </div>
        </section>
        <section className="repoList">
          <div className="flex items-center gap-2">
            <GoRepo className="text-white" />
            <h5><a href="#">react-my-portfolio</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Portfolio</p>
          <div className="flex items-center text-gray-400 py-7 gap-5">
            <div className="flex items-center gap-1">
                <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
                <p className="text-xs">TypeScript</p>
            </div>
            <div className="iconRepo"><AiOutlineStar /><span className="text-xs">0</span></div>
            <div className="iconRepo"><BiGitRepoForked /><span className="text-xs">0</span></div>
          </div>
        </section>
        <section className="repoList">
          <div className="flex items-center gap-2">
            <GoRepo className="text-white" />
            <h5><a href="#">recipe-food-app</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Florin Pop Recipe Food App</p>
          <div className="flex items-center text-gray-400 py-7 gap-5">
            <div className="flex items-center gap-1">
                <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                <p className="text-xs">JavaScript</p>
            </div>
            <div className="iconRepo"><AiOutlineStar /><span className="text-xs">0</span></div>
            <div className="iconRepo"><BiGitRepoForked /><span className="text-xs">0</span></div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Repositories;
