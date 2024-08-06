import React from 'react';
import cpp from './images/c-1.svg'
import c from './images/c.svg'
import python from './images/python-5.svg'
import js from './images/javascript-1.svg'
import react from './images/react-2.svg'
import tailcss from './images/tailwind-css-2.svg'
import html from './images/html-1.svg'
import css from './images/css-3.svg'
import nodejs from './images/nodejs.svg'
import sql from './images/mysql-4.svg'
import linux from './images/linux-tux.svg'
import git from './images/git.svg'
import matlab from './images/matlab.svg'

export default function Skills({ mode }) {
  return (
    <div className={`min-h-screen p-8 ${mode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-6 animate-fadeIn">Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={c} alt="C" />
          <span className="mt-2 text-sm">C</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={cpp} alt="C++" />
          <span className="mt-2 text-sm">C++</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={python} alt="Python" />
          <span className="mt-2 text-sm">Python</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={js} alt="JavaScript" />
          <span className="mt-2 text-sm">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={react} alt="React" />
          <span className="mt-2 text-sm">React</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={tailcss} alt="Tailwind CSS" />
          <span className="mt-2 text-sm">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={html} alt="HTML" />
          <span className="mt-2 text-sm">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={css} alt="CSS" />
          <span className="mt-2 text-sm">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={nodejs} alt="Node.js" />
          <span className="mt-2 text-sm">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={sql} alt="SQL" />
          <span className="mt-2 text-sm">SQL</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={linux} alt="Linux" />
          <span className="mt-2 text-sm">Linux</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={git} alt="Git" />
          <span className="mt-2 text-sm">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-12 w-12" src={matlab} alt="MATLAB" />
          <span className="mt-2 text-sm">MATLAB</span>
        </div>
      </div>
    </div>
    
  );
}
