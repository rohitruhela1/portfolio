import React from 'react';
import cpp from './images/c-1.svg';
import c from './images/c.svg';
import python from './images/python-5.svg';
import js from './images/javascript-1.svg';
import react from './images/react-2.svg';
import tailcss from './images/tailwind-css-2.svg';
import html from './images/html-1.svg';
import css from './images/css-3.svg';
import nodejs from './images/nodejs.svg';
import sql from './images/mysql-4.svg';
import linux from './images/linux-tux.svg';
import git from './images/git.svg';
import matlab from './images/matlab.svg';

export default function Skills() {
  return (
    <div className="relative min-h-screen w-full p-8 bg-black/50">
      {/* Skills Content */}
      <div className="relative z-10 w-full max-w-4xl p-8 text-white mx-auto bg-white/10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { src: c, name: 'C' },
            { src: cpp, name: 'C++' },
            { src: python, name: 'Python' },
            { src: js, name: 'JavaScript' },
            { src: react, name: 'React' },
            { src: tailcss, name: 'Tailwind CSS' },
            { src: html, name: 'HTML' },
            { src: css, name: 'CSS' },
            { src: nodejs, name: 'Node.js' },
            { src: sql, name: 'SQL' },
            { src: linux, name: 'Linux' },
            { src: git, name: 'Git' },
            { src: matlab, name: 'MATLAB' }
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white/20 rounded-lg shadow-md hover:scale-105 transition-transform">
              <div className="w-16 h-16 flex items-center justify-center bg-white p-2 rounded-lg shadow">
                <img className="h-12 w-12 object-contain" src={skill.src} alt={skill.name} />
              </div>
              <span className="mt-3 text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
