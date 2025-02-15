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
    <div className="relative min-h-screen text-white flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-center">Skills</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {[
          { src: c, name: 'C', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
          { src: cpp, name: 'C++', link: 'https://isocpp.org/' },
          { src: python, name: 'Python', link: 'https://www.python.org/' },
          { src: js, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
          { src: react, name: 'React', link: 'https://react.dev/' },
          { src: tailcss, name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
          { src: html, name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { src: css, name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { src: nodejs, name: 'Node.js', link: 'https://nodejs.org/' },
          { src: sql, name: 'SQL', link: 'https://www.mysql.com/' },
          { src: linux, name: 'Linux', link: 'https://www.linux.org/' },
          { src: git, name: 'Git', link: 'https://git-scm.com/' },
          { src: matlab, name: 'MATLAB', link: 'https://www.mathworks.com/products/matlab.html' },
          { src: '/public/postgresql.svg', name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
          { src: '/public/firebase.svg', name: 'Firebase', link: 'https://firebase.google.com/' },
          { src: '/public/expressdotcom.svg', name: 'Express.js', link: 'https://expressjs.com/' },
          { src: '/public/tinkercad.svg', name: 'Tinkercad', link: 'https://www.tinkercad.com/' },
          { src: '/public/blender.svg', name: 'Blender', link: 'https://www.blender.org/' },
          { src: '/public/github.svg', name: 'GitHub', link: 'https://github.com/' },
          { src: '/public/mongodb.svg', name: 'MongoDB', link: 'https://www.mongodb.com/' }
        ].map((skill, index) => (
          <a 
            key={index} 
            href={skill.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white p-2 rounded-lg shadow">
              <img className="h-12 w-12 object-contain" src={skill.src} alt={skill.name} />
            </div>
            <span className="mt-3 text-sm font-semibold">{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
