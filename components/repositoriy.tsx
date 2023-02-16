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
            <h5><a target={"_blank"} href="https://github.com/danialzahidi15/admin-dashboard">admin-dashboard</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">UI for Admin Dashboard</p>
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
            <h5><a target={"_blank"} href="https://github.com/danialzahidi15/countdown-timer">countdown-timer</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Countdown Timer</p>
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
            <h5><a target={"_blank"} href="https://github.com/danialzahidi15/flutter-calculator-app">flutter-calculator-app</a></h5>
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
            <h5><a target={"_blank"} href="https://github.com/danialzahidi15/quiz-app">quiz-app</a></h5>
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
            <h5><a target={"_blank"} href="https://github.com/danialzahidi15/react-my-portfolio">react-my-portfolio</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Build Portfolio Website with Sanity.io</p>
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
            <h5><a target={"_blank"} href="https://github.com/danialzahidi15/recipe-food-app">recipe-food-app</a></h5>
          </div>
          <p className="text-gray-400 text-xs py-3">Recipe Food with MealDB API</p>
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
